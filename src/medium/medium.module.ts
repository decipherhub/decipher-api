import { Module } from '@nestjs/common';
import { MediumService } from './medium.service';

@Module({
  providers: [MediumService]
})
export class MediumModule {}
