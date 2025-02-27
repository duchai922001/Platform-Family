import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import connectDB from "./config/connect-database";
import { mainRoutes } from "./presentations/routes/main.route";
import { Server } from "socket.io";
const app = express();

//config dotenv
dotenv.config();

//config cors
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

//connect to database
connectDB();

//config routes

//start server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: corsOptions,
});

mainRoutes(app, io);

io.on("connection", (socket) => {
  console.log(`🔗 Client connected: ${socket.id}`);

  // Lắng nghe sự kiện gửi tin nhắn
  socket.on("sendMessage", (message) => {
    console.log(`📩 New message from ${message.sender}: ${message.message}`);

    // Phát tin nhắn tới tất cả client
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
