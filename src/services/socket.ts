import http from 'http';
import { Server, Socket } from 'socket.io'

const initializeSocket = (httpServer: http.Server) => {
    const io = new Server(httpServer,{
        cors:{origin:"http://localhost:8080"}
      });
    return io
}
export { initializeSocket };