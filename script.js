function openChatHelper() {
  const toast = document.createElement("div");
  toast.className = "chat-toast";
  toast.textContent = "Abra el ícono de chat en la esquina inferior derecha para continuar.";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4200);
}

const style = document.createElement("style");
style.textContent = `
.chat-toast{
  position:fixed;
  right:22px;
  bottom:92px;
  z-index:999999;
  background:#073B73;
  color:white;
  padding:14px 18px;
  border-radius:16px;
  box-shadow:0 16px 34px rgba(0,0,0,.18);
  max-width:320px;
  font-family:"Helvetica Neue", Arial, sans-serif;
  animation:toastIn .22s ease-out;
}
@keyframes toastIn{
  from{opacity:0;transform:translateY(12px)}
  to{opacity:1;transform:translateY(0)}
}`;
document.head.appendChild(style);
