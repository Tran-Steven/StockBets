import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import Random from '../../assets/Random';
import React, { useState } from 'react';
const [ticker, setTicker] = useState('');
const tickerJSON = f500ticker;

const worker = new Worker('worker.tsx');

function isMarketOpen() {
  worker.postMessage('Status');
}
isMarketOpen();
const setRandTicker = function () {
  setTicker(tickerJSON[Random()].Symbol.valueOf());
};

@Injectable()
export class StockService {
  constructor(private readonly httpService: HttpService) {}
  async getStockData() {
    const date = new Date();
    if (ticker == '' || date.getUTCHours() == 14) {
      setRandTicker();
    }
    const url =
      'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' +
      { ticker } +
      `&apikey=${process.env.STOCK_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    console.log(data);
    return data;
  }
}
