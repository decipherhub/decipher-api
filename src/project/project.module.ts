import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  providers: [ProjectService, ProjectResolver, PrismaClient],
})
export class ProjectModule {}
