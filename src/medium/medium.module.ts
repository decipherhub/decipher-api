import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MediumResolver } from './medium.resolver';
import { MediumService } from './medium.service';

@Module({
  providers: [MediumService, MediumResolver, PrismaClient],
})
export class MediumModule {}
