import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:5173"]
    },
});

io.on("connection", (socket) => {
    console.log(`Usuário conectado ${socket.id}`);

    socket.on("send_message", (message) => {
        io.emit("receive_message", message);
    })
    
    socket.on("disconnect", () => {
        console.log(`Usuario desconectado ${socket.id}`);
    })
});

const PORT = 4000;

httpServer.listen(PORT, () => {
    console.log(`Servidor Socket.IO rodando na porta ${PORT}`);
});