import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { NewsResponse } from './news.reponse';
import { NewsService } from './news.service';
import {
  CreateNewsInput,
  UpdateNewsInput,
  FindManyNewsInput,
} from './news.input';
import { CountResponse } from 'medium/response/medium.response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'user/guard/user.guard';

@Resolver((of) => NewsResponse)
export class NewsResolver {
  constructor(private newsService: NewsService) {}

  @Query((returns) => NewsResponse, { nullable: true })
  getNewsById(@Args('id') id: number) {
    return this.newsService.getNews(id);
  }

  @Query((returns) => CountResponse)
  countTotalNews() {
    return this.newsService.countNews();
  }

  @Query((returns) => [NewsResponse])
  getAllNews(@Args('FindManyNewsInput') findManyNewsInput: FindManyNewsInput) {
    return this.newsService.getAllNews(findManyNewsInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => NewsResponse)
  createNews(@Args('createNewsInput') createNewsInput: CreateNewsInput) {
    return this.newsService.createNews(createNewsInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => NewsResponse)
  updateNews(@Args('updateNewsInput') updateNewsInput: UpdateNewsInput) {
    return this.newsService.updateNews(updateNewsInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => NewsResponse)
  deleteNews(@Args('id') id: number) {
    return this.newsService.deleteNews(id);
  }
}
