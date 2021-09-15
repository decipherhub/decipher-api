import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { FooResolver } from './resolvers.foo';
import { UserModule } from './user/user.module';
import { NewsModule } from 'news/news.module';
import { DeferenceModule } from 'deference/deference.module';
import { DeferenceImageModule } from 'deferenceImage/deferenceImage.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    UserModule,
    NewsModule,
    DeferenceModule,
    DeferenceImageModule
  ],
  controllers: [AppController],
  providers: [AppService, FooResolver, PrismaService],
})
export class AppModule {}
