import { Injectable } from '@nestjs/common';
import { PrismaClient, PeriodMember, Period } from '@prisma/client';
import { PeriodFindInput, PeriodInput } from './input/period.input';
import {
  PeriodMemberInput,
  PeriodMemberUniqueInput,
} from './input/periodMember.input';

@Injectable()
export class PeriodService {
  constructor(private prisma: PrismaClient) {}

  async createPeriod(periodInput: PeriodInput): Promise<Period> {
    const { generation } = periodInput;

    const period = await this.prisma.period.create({
      data: {
        generation,
      },
    });

    return period;
  }

  async createPeriodMember(
    periodMemberInput: PeriodMemberInput,
  ): Promise<PeriodMember> {
    const { role, memberId, periodId } = periodMemberInput;

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

  async getAllPeriods(periodFindInput: PeriodFindInput): Promise<Period[]> {
    const { id } = periodFindInput;
    const periods = await this.prisma.period.findMany({
      where: { id },
      orderBy: {
        generation: 'desc',
      },
      include: {
        projects: {
          include: {
            url: true,
            members: {
              include: {
                member: true,
              },
            },
          },
        },
        members: {
          include: {
            member: {
              include: {
                contacts: true,
              },
            },
          },
        },
      },
    });

    return periods;
  }

  async findPeriod(periodFindInput: PeriodFindInput): Promise<Period> {
    const { id } = periodFindInput;
    const period = await this.prisma.period.findUnique({
      where: {
        id,
      },
      include: {
        projects: {
          include: {
            url: true,
            members: {
              include: {
                member: true,
              },
            },
          },
        },
        members: {
          include: {
            member: {
              include: {
                contacts: true,
              },
            },
          },
        },
      },
    });

    return period;
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

  async updatePeriodMember(periodMemberInput: PeriodMemberInput) {
    const { role, memberId, periodId } = periodMemberInput;
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
