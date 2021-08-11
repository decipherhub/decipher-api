import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { FooResolver } from './resolvers.foo';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true })],
  controllers: [AppController],
  providers: [AppService, FooResolver, PrismaService],
})
export class AppModule {}
