import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DeferenceImageResolver } from './deferenceImage.resolver';
import { DeferenceImageService } from './deferenceImage.service';

@Module({
  providers: [DeferenceImageService, DeferenceImageResolver, PrismaClient],
})
export class DeferenceImageModule {}
