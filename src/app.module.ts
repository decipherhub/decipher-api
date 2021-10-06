import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { MemberModule } from 'member/member.module';
import { PeriodModule } from 'period/period.module';
import { ProjectModule } from './project/project.module';
import { NewsModule } from 'news/news.module';
import { DeferenceModule } from 'deference/deference.module';
import { DeferenceImageModule } from 'deferenceImage/deferenceImage.module';
import { MediumModule } from './medium/medium.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    UserModule,
    MemberModule,
    PeriodModule,
    ProjectModule,
    NewsModule,
    DeferenceModule,
    DeferenceImageModule,
    MediumModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
