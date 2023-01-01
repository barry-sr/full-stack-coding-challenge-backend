import { Injectable } from '@nestjs/common';
import Airport from './interface/airport';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAirport(filter: string): Promise<Airport[]> {
    return await this.prismaService.airport.findMany({
      where: {
        OR: [
          {
            name: {
              contains: filter,
              mode: 'insensitive'
            },
          },
          {
            iata: filter,
          },
          {
            city:  {
             contains: filter,
             mode: 'insensitive'
            },
          },
          {
            country: {
              contains: filter,
              mode: 'insensitive'
            },
          },
        ],
      },
    });
  }
}
