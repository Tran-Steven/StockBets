import styles from "@styles/StockofTheDay.module.css";
import LoadingInfobar from "../LoadingInfoBar/LoadingInfoBar";
// import LeaderBoard from "@components/LeaderBoard/LeaderBoard";
import f500ticker from "@assets/f500tickers.json";
import axios from "axios";
import Random from "@assets/Random";
import React, { useState, useEffect } from "react";
// reccomended to put this in the back, since this will be unique for each user so to make sure not
// every user gets a different stock on refresh. -Alex

export default function StockofTheDay() {
  useEffect(() => {
    check();
    getStockData();
    setInterval(check, 15000 * 60);
    setInterval(getStockData, 300000);
  }, []);
  let date = new Date();
  let marketStatus = false;
  let StockData: any;
  let stockRefreshDate: any;
  const tickerJSON = f500ticker;
  const [ticker, setTicker] = useState("");

  let test = tickerJSON[Random()].Symbol.valueOf();

  function check() {
    if (date.getUTCHours() >= 14 && date.getUTCMinutes() >= 30) {
      if (date.getUTCHours() <= 21) {
        return (marketStatus = true);
      }
    }
    return (marketStatus = true);
  }

  const setRandTicker = function () {
    setTicker(test);
    return test;
  };

  async function getStockData() {
    if (StockData == undefined) {
      const url =
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        test +
        "&interval=1min" +
        `&apikey=${process.env.REACT_APP_STOCK_KEY}`; // ${process.env.STOCK_KEY}
      axios.get(url).then((res: any) => {
        StockData = res;
      });
    }
    if (marketStatus == true) {
      if (ticker == "" || date.getUTCHours() == 14) {
        setRandTicker();
      }
      const url =
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        test +
        "&interval=1min" +
        `&apikey=${process.env.REACT_APP_STOCK_KEY}`; // ${process.env.STOCK_KEY}
      axios.get(url).then((res: any) => {
        StockData = res;
        stockRefreshDate = res["Meta Data"]["3. Last Refreshed"];
      });
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContent}>
        <div className={styles.buttonOptions}>
          <button>Buy</button>
          <button>Sell</button>
        </div>
        <LoadingInfobar
          StockName={ticker}
          // StartingPrice={StockData["Time Series (5min)"][stockRefreshDate]}
          StartingPrice={140}
          CurrentPrice={140}
        />
      </div>
    </div>
  );
}
