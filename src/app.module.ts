import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { FooResolver } from './resolvers.foo';
import { MemberModule } from './member/member.module';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true }), MemberModule],
  controllers: [AppController],
  providers: [AppService, FooResolver, PrismaService],
})
export class AppModule {}
