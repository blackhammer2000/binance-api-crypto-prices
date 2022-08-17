const tableBody = document.querySelector("[data-table-body]");
const webSocket = new WebSocket(
  `wss://stream.binance.com:9443/ws/etheur@trade`
);

webSocket.onmessage = (e) => {
  console.log(e.data);
};
