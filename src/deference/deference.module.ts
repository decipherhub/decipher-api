import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DeferenceResolver } from './deference.resolver';
import { DeferenceService } from './deference.service';

@Module({
  providers: [DeferenceService, DeferenceResolver, PrismaClient],
})
export class DeferenceModule {}
