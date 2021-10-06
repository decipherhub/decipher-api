import { PrismaClient, Deference } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateDeferenceInput, UpdateDeferenceInput } from './deference.input';

@Injectable()
export class DeferenceService {
  constructor(private prisma: PrismaClient) {}

  async getDeference(id: number): Promise<Deference> {
    return await this.prisma.deference.findUnique({
      where: {
        id,
      },
      include: {
        deferenceImage: true,
      },
    });
  }

  async getDeferences(): Promise<Deference[]> {
    return await this.prisma.deference.findMany({
      include: {
        deferenceImage: true,
      },
    });
  }

  async createDeference(
    createDeferenceInput: CreateDeferenceInput,
  ): Promise<Deference> {
    const { year } = createDeferenceInput;
    return this.prisma.deference.create({
      data: {
        year,
      },
      include: {
        deferenceImage: true,
      },
    });
  }

  async updateDeference(
    updateDeferenceInput: UpdateDeferenceInput,
  ): Promise<Deference> {
    const { id, year } = updateDeferenceInput;
    return this.prisma.deference.update({
      where: {
        id,
      },
      data: {
        year,
      },
    });
  }

  async deleteDeference(id: number): Promise<Deference> {
    return await this.prisma.deference.delete({
      where: {
        id,
      },
    });
  }
}
