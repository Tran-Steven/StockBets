import { Controller, Get, Render } from '@nestjs/common';
import { StockService } from './app.service';

@Controller(`stock`)
export class StockController {
  constructor(private readonly appService: StockService) {}
  @Get()
  getStockData() {
    return this.appService.getStockData();
  }
}
