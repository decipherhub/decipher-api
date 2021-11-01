import { Args, Resolver, Query, Mutation, Int } from '@nestjs/graphql';
import { NewsResponse } from './news.reponse';
import { NewsService } from './news.service';
import {
  CreateNewsInput,
  UpdateNewsInput,
  FindManyNewsInput,
} from './news.input';
import { CountResponse } from 'medium/response/medium.response';

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

  @Mutation((returns) => NewsResponse)
  createNews(@Args('createNewsInput') createNewsInput: CreateNewsInput) {
    return this.newsService.createNews(createNewsInput);
  }

  @Mutation((returns) => NewsResponse)
  updateNews(@Args('updateNewsInput') updateNewsInput: UpdateNewsInput) {
    return this.newsService.updateNews(updateNewsInput);
  }

  @Mutation((returns) => NewsResponse)
  deleteNews(@Args('id') id: number) {
    return this.newsService.deleteNews(id);
  }
}
