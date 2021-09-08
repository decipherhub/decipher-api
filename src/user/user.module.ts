import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';

@Module({
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModule {}
