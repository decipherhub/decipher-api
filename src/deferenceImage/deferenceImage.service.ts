import { PrismaClient, DeferenceImage } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import {
  CreateDeferenceImageInput,
  UpdateDeferenceImageInput,
} from 'deferenceImage/deferenceImage.input';

@Injectable()
export class DeferenceImageService {
  constructor(private prisma: PrismaClient) {}

  async getDeferenceImage(id: number): Promise<DeferenceImage> {
    return await this.prisma.deferenceImage.findUnique({
      where: {
        id,
      },
    });
  }

  async getDeferenceImages(): Promise<DeferenceImage[]> {
    return await this.prisma.deferenceImage.findMany();
  }

  async createDeferenceImage(
    createDeferenceImageInput: CreateDeferenceImageInput,
  ): Promise<DeferenceImage> {
    const { type, image_url, deferenceId } = createDeferenceImageInput;
    return this.prisma.deferenceImage.create({
      data: {
        type,
        image_url,
        deferenceId,
      },
    });
  }

  async updateDeferenceImage(
    updateDeferenceImageInput: UpdateDeferenceImageInput,
  ): Promise<DeferenceImage> {
    const { id, type, image_url, deferenceId } = updateDeferenceImageInput;
    return await this.prisma.deferenceImage.update({
      where: {
        id,
      },
      data: {
        type,
        image_url,
        deferenceId,
      },
    });
  }

  async deleteDeferenceImage(id: number): Promise<DeferenceImage> {
    return await this.prisma.deferenceImage.delete({
      where: {
        id,
      },
    });
  }
}
