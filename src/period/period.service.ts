import { Injectable } from '@nestjs/common';
import { PrismaClient, PeriodMember, Period } from '@prisma/client';
import { PeriodFindInput, PeriodGenerationInput } from './input/period.input';
import {
  PeriodMemberCreateOrUpdateInput,
  PeriodMemberUniqueInput,
} from './input/periodMember.input';

@Injectable()
export class PeriodService {
  constructor(private prisma: PrismaClient) {}

  async createPeriod(
    periodGenerationInput: PeriodGenerationInput,
  ): Promise<Period> {
    const { generation } = periodGenerationInput;

    const period = await this.prisma.period.create({
      data: {
        generation,
      },
    });

    return period;
  }

  async createPeriodMember(
    periodMemberCreateInput: PeriodMemberCreateOrUpdateInput,
  ): Promise<PeriodMember> {
    const { role, memberId, periodId } = periodMemberCreateInput;

    const periodMember = await this.prisma.periodMember.create({
      data: {
        role,
        member: { connect: { id: memberId } },
        period: { connect: { id: periodId } },
      },
      include: {
        period: true,
        member: true,
      },
    });

    return periodMember;
  }

  async findPeriodMembers(
    periodFindInput: PeriodFindInput,
  ): Promise<PeriodMember[]> {
    const { id } = periodFindInput;
    const periodMembers = await this.prisma.periodMember.findMany({
      where: {
        periodId: id,
      },
      include: {
        period: true,
        member: true,
      },
    });

    return periodMembers;
  }

  async updatePeriodMember(
    periodMemberUpdateInput: PeriodMemberCreateOrUpdateInput,
  ) {
    const { role, memberId, periodId } = periodMemberUpdateInput;
    const periodMember = this.prisma.periodMember.update({
      where: {
        memberId_periodId: {
          memberId,
          periodId,
        },
      },
      data: {
        role,
      },
      include: {
        period: true,
        member: true,
      },
    });

    return periodMember;
  }

  async deletePeriodMember(
    periodMemberUniqueInput: PeriodMemberUniqueInput,
  ): Promise<PeriodMember> {
    const { memberId, periodId } = periodMemberUniqueInput;
    const periodMember = await this.prisma.periodMember.delete({
      where: {
        memberId_periodId: {
          memberId,
          periodId,
        },
      },
      include: {
        period: true,
        member: true,
      },
    });

    return periodMember;
  }
}
