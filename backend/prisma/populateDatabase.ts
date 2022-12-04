import { PrismaClient } from '@prisma/client';
import * as airports from '../../frontend/data/airports.json';
import Airport from '../src/interface/airport';

const prismaClient = new PrismaClient();

const main = async () => {
  const data: Airport[] = airports;
  const queryResult = await prismaClient.airport.createMany({
    data: data,
    skipDuplicates: false,
  });
  console.log('populate db query result', queryResult);
};

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (error) => {
    console.log('error occurred while populating db', error);
    await prismaClient.$disconnect();
    process.exit(1);
  });
