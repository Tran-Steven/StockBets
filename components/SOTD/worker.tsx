import axios from "axios";
let marketStatus = false;
let date = new Date();
let StockData;
function check() {
  if (date.getUTCHours() >= 14 && date.getUTCMinutes() >= 30) {
    if (date.getUTCHours() <= 21) {
      return (marketStatus = true);
    }
  }
  return (marketStatus = false);
}

function getStockData() {
  if (marketStatus == true) {
    axios.get("http://localhost:3000/api/stockdata/").then(function (response) {
      StockData = response;
    });
  }
}
onmessage = function (message) {
  setInterval(check, 1500 * 60);
  this.setInterval(getStockData, 1500 * 60);
};
