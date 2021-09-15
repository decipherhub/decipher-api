import { Injectable } from '@nestjs/common';
import { PrismaClient, Member } from '@prisma/client';
import {
  MemberCreateInput,
  MemberDeleteInput,
  MemberFindByIdInput,
  MemberFindManyInput,
  MemberUpdateInput,
} from './input/member.input';
@Injectable()
export class MemberService {
  constructor(private prisma: PrismaClient) {}

  async createMember(memberCreateInput: MemberCreateInput): Promise<Member> {
    const { name, info, imageUrl, contacts } = memberCreateInput;

    const contactCreate = {
      createMany: { data: contacts?.create },
    };

    const contactConnect = { connect: contacts?.connect };

    const member = await this.prisma.member.create({
      data: {
        name,
        info,
        imageUrl,
        contacts: contacts.create ? contactCreate : contactConnect,
      },
      include: {
        contacts: true,
        periods: true,
      },
    });

    return member;
  }

  async findMemberById(
    memberFindByIdInput: MemberFindByIdInput,
  ): Promise<Member> {
    const { id } = memberFindByIdInput;
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: {
        contacts: true,
        periods: true,
      },
      rejectOnNotFound: true,
    });

    return member;
  }

  async findMembers(
    memberFindManyInput: MemberFindManyInput,
  ): Promise<Member[]> {
    const { orderBy } = memberFindManyInput;
    const member = await this.prisma.member.findMany({
      orderBy,
      include: {
        contacts: true,
        periods: true,
      },
    });

    return member;
  }

  async updateMember(memberUpdateInput: MemberUpdateInput): Promise<Member> {
    const { id, data } = memberUpdateInput;
    const member = await this.prisma.member.update({
      where: { id },
      data,
      include: {
        contacts: true,
        periods: true,
      },
    });

    return member;
  }

  async deleteMember(memberDeleteInput: MemberDeleteInput): Promise<Member> {
    const { id } = memberDeleteInput;
    const member = await this.prisma.member.delete({
      where: { id },
    });

    return member;
  }
}
