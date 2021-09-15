import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PeriodResolver } from './period.resolver';
import { PeriodService } from './period.service';

@Module({
  providers: [PeriodService, PeriodResolver, PrismaClient],
})
export class PeriodModule {}
