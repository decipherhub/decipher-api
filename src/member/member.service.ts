import { Injectable } from '@nestjs/common';
import { PrismaClient, Member } from '@prisma/client';
import {
  MemberFindManyInput,
  MemberInput,
  MemberUniqueInput,
  MemberUpdateInput,
} from './input/member.input';
@Injectable()
export class MemberService {
  constructor(private prisma: PrismaClient) {}

  async createMember(memberInput: MemberInput): Promise<Member> {
    const { name, info, imageUrl, contacts, periods } = memberInput;

    const member = await this.prisma.member.create({
      data: {
        name,
        info,
        imageUrl,
        contacts: { createMany: { data: contacts } },
        periods: { createMany: { data: periods } },
      },
      include: {
        contacts: true,
        periods: {
          select: {
            period: true,
            role: true,
          },
        },
      },
    });

    return member;
  }

  async findMemberById(memberUniqueInput: MemberUniqueInput): Promise<Member> {
    const { id } = memberUniqueInput;
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: {
        contacts: true,
        periods: {
          select: {
            period: true,
            role: true,
          },
        },
      },
      rejectOnNotFound: true,
    });

    return member;
  }

  async findMembers(
    memberFindManyInput: MemberFindManyInput,
  ): Promise<Member[]> {
    const { orderBy, periodId } = memberFindManyInput;
    const member = await this.prisma.member.findMany({
      orderBy,
      where: {
        periods: {
          some: { periodId },
        },
      },
      include: {
        contacts: true,
        periods: {
          select: {
            period: true,
            role: true,
          },
        },
      },
    });

    return member;
  }

  async updateMember(memberUpdateInput: MemberUpdateInput): Promise<Member> {
    const { id, data } = memberUpdateInput;
    const { name, info, imageUrl, contacts, periods } = data;
    const member = await this.prisma.member.update({
      where: { id },
      data: {
        name,
        info,
        imageUrl,
        contacts: {
          deleteMany: {},
          createMany: { data: contacts },
        },
        periods: {
          deleteMany: {},
          createMany: { data: periods },
        },
      },

      include: {
        contacts: true,
        periods: {
          select: {
            period: true,
            role: true,
          },
        },
      },
    });

    return member;
  }

  async deleteMember(memberUniqueInput: MemberUniqueInput): Promise<Member> {
    const { id } = memberUniqueInput;
    const member = await this.prisma.member.delete({
      where: { id },
      include: {
        contacts: true,
        periods: {
          select: {
            period: true,
            role: true,
          },
        },
      },
    });

    return member;
  }
}
