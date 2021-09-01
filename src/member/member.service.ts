import { Injectable } from '@nestjs/common';
import { PrismaClient, Member } from '@prisma/client';
import { CreateMemberInput } from './member.input';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaClient) {}

  async createMember(createMemberInput: CreateMemberInput): Promise<Member> {
    const { name, info, imageUrl } = createMemberInput;
    const member = await this.prisma.member.create({
      data: {
        name,
        info,
        imageUrl,
      },
    });

    return member;
  }

  async getMember(id: number): Promise<Member> {
    const member = await this.prisma.member.findUnique({
      where: {
        id,
      },
    });

    return member;
  }

  async getMembers(): Promise<Member[]> {
    const members = await this.prisma.member.findMany();
    return members;
  }
}
