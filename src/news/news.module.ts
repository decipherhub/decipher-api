import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NewsResolver } from './news.resolver';
import { NewsService } from './news.service';

@Module({
  providers: [NewsService, NewsResolver, PrismaClient],
})
export class NewsModule {}
