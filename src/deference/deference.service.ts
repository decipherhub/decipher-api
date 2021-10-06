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

    const createDeferenceImage = {
      createMany: { data: deferenceImage }
    };

    return await this.prisma.deference.create({
      data: {
        year,
        deferenceImage: createDeferenceImage
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
    const deferenceImage_image_url = deferenceImage.image_url;
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
              image_url: deferenceImage_image_url
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
    await this.prisma.deferenceImage.deleteMany({
      where: {
        deferenceId: id
      }
    })

    return await this.prisma.deference.delete({
      where: {
        id,
      },
    });
  }
}
