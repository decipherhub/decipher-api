import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';

@Module({
  providers: [PeriodService]
})
export class PeriodModule {}
