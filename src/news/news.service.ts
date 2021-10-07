import { News, PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateNewsInput, FindManyNewsInput, UpdateNewsInput } from './news.input';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaClient) {}

  async getNews(id: number): Promise<News> {
    return await this.prisma.news.findUnique({
      where: {
        id,
      },
      include: {
        member: true,
      },
    });
  }

  async getAllNews(findManyNewsInput: FindManyNewsInput): Promise<News[]> {
    const { offset, page } = findManyNewsInput;
    return await this.prisma.news.findMany({
      skip: page * offset ? page * offset : 0,
      take: offset,
      include: {
        member: true
      }
    });
  }

  async createNews(createNewsInput: CreateNewsInput): Promise<News> {
    const { title, memberId, summary, link, imageUrl, isDisclosed } =
      createNewsInput;
    return this.prisma.news.create({
      data: {
        title,
        memberId,
        summary,
        link,
        imageUrl,
        isDisclosed,
      },
      include: {
        member: true,
      },
    });
  }

  async updateNews(updateNewsInput: UpdateNewsInput): Promise<News> {
    const { id, title, memberId, summary, link, imageUrl, isDisclosed } =
      updateNewsInput;
    return this.prisma.news.update({
      where: {
        id,
      },
      data: {
        title,
        memberId,
        summary,
        link,
        imageUrl,
        isDisclosed,
      },
      include: {
        member: true,
      },
    });
  }

  async deleteNews(id: number): Promise<News> {
    return await this.prisma.news.delete({
      where: {
        id,
      },
      include: {
        member: true,
      },
    });
  }
}
