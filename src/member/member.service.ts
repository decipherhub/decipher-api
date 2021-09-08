import { Injectable } from '@nestjs/common';
import { PrismaClient, Member, Prisma } from '@prisma/client';
import {
  MemberCreateInput,
  MemberDeleteInput,
  MemberFindInput,
  MemberFindManyInput,
  MemberUpdateManyInput,
} from './input/member.input';
@Injectable()
export class MemberService {
  constructor(private prisma: PrismaClient) {}

  async createMember(memberCreateInput: MemberCreateInput): Promise<Member> {
    const { name, info, imageUrl } = memberCreateInput;
    const member = await this.prisma.member.create({
      data: {
        name,
        info,
        imageUrl,
      },
    });

    return member;
  }

  async findMember(memberFindInput: MemberFindInput): Promise<Member> {
    const { where } = memberFindInput;
    const member = await this.prisma.member.findUnique({
      where,
    });

    return member;
  }

  async findMembers(
    memberFindManyInput: MemberFindManyInput,
  ): Promise<Member[]> {
    const { where, orderBy } = memberFindManyInput;
    const member = await this.prisma.member.findMany({
      where,
      orderBy,
    });

    return member;
  }

  async updateMember(
    memberUpdateManyInput: MemberUpdateManyInput,
  ): Promise<Prisma.BatchPayload> {
    const { where, data } = memberUpdateManyInput;
    const member = await this.prisma.member.updateMany({
      where,
      data,
    });

    return member;
  }

  async deleteMember(memberDeleteInput: MemberDeleteInput): Promise<Member> {
    const { where } = memberDeleteInput;
    const member = await this.prisma.member.delete({
      where,
    });

    return member;
  }
}
