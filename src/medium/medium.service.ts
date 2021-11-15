import { Injectable } from '@nestjs/common';
import { PrismaClient, Medium, Tag } from '@prisma/client';
import {
  MediumInput,
  MediumFindManyInput,
  MediumUniqueInput,
  MediumUpdateInput,
  MediumCountInput,
} from './input/medium.input';
import { TagCreateInput, TagUniqueInput } from './input/tag.input';
import { CountResponse } from './response/medium.response';

@Injectable()
export class MediumService {
  constructor(private prisma: PrismaClient) {}

  async createMedium(mediumCreateInput: MediumInput): Promise<Medium> {
    const { title, url, imageUrl, summary, memberIds, tagIds } =
      mediumCreateInput;

    const memberIdList = memberIds.map((id, _index) => {
      return { memberId: id };
    });

    const tagIdList = tagIds.map((id, _index) => {
      return { tagId: id };
    });

    const medium = await this.prisma.medium.create({
      data: {
        title,
        url,
        imageUrl,
        summary,
        authors: { createMany: { data: memberIdList } },
        tags: { createMany: { data: tagIdList } },
      },
      include: {
        authors: {
          select: {
            medium: true,
            member: true,
          },
        },
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });

    return medium;
  }

  async findMediumById(mediumUniqueInput: MediumUniqueInput): Promise<Medium> {
    const { id } = mediumUniqueInput;

    const medium = await this.prisma.medium.findUnique({
      where: {
        id,
      },
      include: {
        authors: {
          select: {
            medium: true,
            member: true,
          },
        },
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });

    return medium;
  }

  async findMediums(
    mediumFindManyInput: MediumFindManyInput,
  ): Promise<Medium[]> {
    const { tagId, offset, page } = mediumFindManyInput;

    const mediums = await this.prisma.medium.findMany({
      skip: page * offset ? page * offset : 0,
      take: offset,
      where: {
        tags: {
          some: {
            tagId,
          },
        },
      },
      include: {
        authors: {
          select: {
            medium: true,
            member: true,
          },
        },
        tags: {
          select: {
            tag: true,
          },
        },
      },
    });

    return mediums;
  }

  async updateMedium(mediumUpdateInput: MediumUpdateInput) {
    const { id, data } = mediumUpdateInput;

    const memberIdList = data.memberIds.map((id, _index) => {
      return { memberId: id };
    });

    const tagIdList = data.tagIds.map((id, _index) => {
      return { tagId: id };
    });

    const medium = this.prisma.medium.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        url: data.url,
        imageUrl: data.imageUrl,
        summary: data.summary,
        authors: { deleteMany: {}, createMany: { data: memberIdList } },
        tags: { deleteMany: {}, createMany: { data: tagIdList } },
      },
      include: {
        authors: {
          select: {
            medium: true,
            member: true,
          },
        },
        tags: {
          select: {
            tag: true,
            medium: true,
          },
        },
      },
    });

    return medium;
  }

  async deleteMedium(mediumUniqueInput: MediumUniqueInput): Promise<Medium> {
    const { id } = mediumUniqueInput;
    const medium = await this.prisma.medium.delete({
      where: {
        id,
      },
      include: {
        authors: {
          select: {
            medium: true,
            member: true,
          },
        },
        tags: {
          select: {
            tag: true,
            medium: true,
          },
        },
      },
    });

    return medium;
  }

  async findTags(): Promise<Tag[]> {
    const tags = await this.prisma.tag.findMany();
    return tags;
  }

  async createTag(tagCreateInput: TagCreateInput): Promise<Tag> {
    const { name } = tagCreateInput;
    const tag = await this.prisma.tag.create({
      data: {
        name,
      },
    });

    return tag;
  }

  async deleteTag(tagUniqueInput: TagUniqueInput): Promise<Tag> {
    const { id } = tagUniqueInput;
    const tag = await this.prisma.tag.delete({
      where: { id },
    });

    return tag;
  }

  async countMedium(
    mediumCountInput: MediumCountInput,
  ): Promise<CountResponse> {
    const tagId = mediumCountInput?.tagId;
    const count = await this.prisma.medium.count(
      tagId && {
        where: {
          tags: {
            some: {
              tagId,
            },
          },
        },
      },
    );

    return { count };
  }
}
