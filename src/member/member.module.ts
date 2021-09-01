import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';

@Module({
  providers: [MemberService, MemberResolver, PrismaClient],
})
export class MemberModule {}
