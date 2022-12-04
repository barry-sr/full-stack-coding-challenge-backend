import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import Airport from './interface/airport';

@Controller('airport')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':filter')
  async getAirport(@Param('filter') filter: string): Promise<Airport[]> {
    return await this.appService.findAirport(filter);
  }
}
