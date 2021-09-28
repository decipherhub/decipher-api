import { PrismaClient, Deference } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateDeferenceInput, UpdateDeferenceInput } from './input/deference.input';

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
      rejectOnNotFound: true,
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
    const { year, deferenceImages } = createDeferenceInput;

    const createDeferenceImage = {
      createMany: { data: deferenceImages?.create }
    };

    const connectDeferenceImage = {
      connect: deferenceImages?.connect
    };

    return this.prisma.deference.create({
      data: {
        year,
        deferenceImage: deferenceImages.create ? createDeferenceImage : connectDeferenceImage
      },
      include: {
        deferenceImage: true,
      },
    });
  }

  async updateDeference(
    updateDeferenceInput: UpdateDeferenceInput,
  ): Promise<Deference> {
    const { id, data } = updateDeferenceInput;
    return this.prisma.deference.update({
      where: {
        id,
      },
      data,
      include: {
        deferenceImage: true
      }
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
