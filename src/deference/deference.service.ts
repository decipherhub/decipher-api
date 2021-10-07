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
    const { year, deferenceImage } = createDeferenceInput;

    return await this.prisma.deference.create({
      data: {
        year,
        deferenceImage: {
          createMany: { 
            data: deferenceImage 
          }
        },
      },
      include: {
        deferenceImage: true,
      },
    });
  }

  async updateDeference(
    updateDeferenceInput: UpdateDeferenceInput,
  ): Promise<Deference> {
    const { id, year, deferenceImage } = updateDeferenceInput;
    const deferenceImage_id = deferenceImage.id;
    const deferenceImage_type = deferenceImage.type;
    const deferenceImage_imageUrl = deferenceImage.imageUrl;
    return this.prisma.deference.update({
      where: {
        id,
      },
      data: {
        year,
        deferenceImage: {
          update: {
            where: {
              id: deferenceImage_id
            },
            data: {
              type: deferenceImage_type,
              imageUrl: deferenceImage_imageUrl
            }
          },

        }
      },
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
