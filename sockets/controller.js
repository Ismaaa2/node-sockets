const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconection", (socket) => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456789;
    callback(id);

    //socket.emit("enviar-mensaje", payload);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
