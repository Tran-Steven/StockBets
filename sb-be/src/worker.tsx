import axios from 'axios';
let marketStatus = false;
let date = new Date();
let StockData;
function check() {
  if (date.getUTCHours() >= 14 && date.getUTCMinutes() >= 30) {
    if (date.getUTCHours() <= 21) {
      return (marketStatus = true);
    }
  }
  return (marketStatus = true);
}

function getStockData() {
  if (marketStatus == true) {
    axios.get('/api/stockdata/').then(function (response) {
      StockData = response;
    });
  }
}
onmessage = function (message) {
  setInterval(check, 15000 * 60);
  setInterval(getStockData, 300000);
};
