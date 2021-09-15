import { News, PrismaClient } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { CreateNewsInput, UpdateNewsInput } from "./news.input";

@Injectable()
export class NewsService {
    constructor(private prisma: PrismaClient) {}

    async getNews(id: number): Promise<News> {
        return await this.prisma.news.findUnique({
            where: {
                id,
            }
        })
    };

    async getAllNews(): Promise<News[]> {
        return await this.prisma.news.findMany();
    }

    async createNews(createNewsInput: CreateNewsInput): Promise<News> {
        const { title, memberId, summary, link, image_url, is_disclosed } = createNewsInput;
        return this.prisma.news.create({
            data: {
                title,
                memberId,
                summary,
                link,
                image_url,
                is_disclosed
            }
        });
    }

    async updateNews(updateNewsInput: UpdateNewsInput): Promise<News> {
        const { id, title, memberId, summary, link, image_url, is_disclosed } = updateNewsInput;
        return this.prisma.news.update({
            where: {
                id,
            },
            data: {
                title, 
                memberId,
                summary,
                link,
                image_url,
                is_disclosed
            }
        })
    }

    async deleteNews(id: number): Promise<News> {
        return await this.prisma.news.delete({
            where: {
                id,
            }
        })
    }
}