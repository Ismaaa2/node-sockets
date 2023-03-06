const online = document.getElementById("online");
const offline = document.getElementById("offline");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar");

const socket = io();

socket.on("connect", () => {
  console.log("connect");
  offline.style.display = "none";
  online.style.display = "";
});

socket.on("disconnect", () => {
  console.log("disconnect");
  offline.style.display = "";
  online.style.display = "none";
});

socket.on("enviar-mensaje", (msg) => {
  console.log(msg);
});

btnEnviar.addEventListener("click", () => {
  const msg = txtMensaje.value;
  const payload = {
    msg,
    id: "123ABC",
    fecha: new Date().getTime(),
  };

  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("desde el server", id);
  });
});
