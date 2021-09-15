import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { NewsResponse } from './news.reponse';
import { NewsService } from './news.service';
import { CreateNewsInput, UpdateNewsInput } from './news.input';

@Resolver((of) => NewsResponse)
export class NewsResolver {
  constructor(private newsService: NewsService) {}

  @Query((returns) => NewsResponse, { nullable: true })
  getNewsById(@Args('id') id: number) {
    return this.newsService.getNews(id);
  }

  @Query((returns) => [NewsResponse])
  getAllNews() {
    return this.newsService.getAllNews();
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
