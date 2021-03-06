import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Period, PeriodMember } from '@prisma/client';
import { GqlAuthGuard } from 'user/guard/user.guard';
import { PeriodFindInput, PeriodInput } from './input/period.input';
import {
  PeriodMemberInput,
  PeriodMemberUniqueInput,
} from './input/periodMember.input';
import { PeriodService } from './period.service';
import { PeriodResponse } from './response/period.response';
import { PeriodMemberResponse } from './response/periodMember.response';

@Resolver()
export class PeriodResolver {
  constructor(private periodService: PeriodService) {}
  @Query((_returns) => [PeriodMemberResponse])
  periodMembers(
    @Args('periodFindInput')
    periodFindInput: PeriodFindInput,
  ): Promise<PeriodMember[]> {
    return this.periodService.findPeriodMembers(periodFindInput);
  }

  @Query((_returns) => PeriodResponse)
  period(
    @Args('periodFindInput')
    periodFindInput: PeriodFindInput,
  ): Promise<Period> {
    return this.periodService.findPeriod(periodFindInput);
  }

  @Query((_returns) => [PeriodResponse])
  periods(
    @Args('periodFindInput')
    periodFindInput: PeriodFindInput,
  ): Promise<Period[]> {
    return this.periodService.getAllPeriods(periodFindInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => PeriodResponse)
  createPeriod(@Args('periodInput') periodInput: PeriodInput): Promise<Period> {
    return this.periodService.createPeriod(periodInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => PeriodMemberResponse)
  createPeriodMember(
    @Args('periodMemberCreateInput')
    periodMemberCreateInput: PeriodMemberInput,
  ): Promise<PeriodMember> {
    return this.periodService.createPeriodMember(periodMemberCreateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => PeriodMemberResponse)
  updatePeriodMember(
    @Args('periodMemberUpdateInput')
    periodMemberUpdateInput: PeriodMemberInput,
  ): Promise<PeriodMember> {
    return this.periodService.updatePeriodMember(periodMemberUpdateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => PeriodMemberResponse)
  deletePeriodMember(
    @Args('periodMemberUniqueInput')
    periodMemberUniqueInput: PeriodMemberUniqueInput,
  ): Promise<PeriodMember> {
    return this.periodService.deletePeriodMember(periodMemberUniqueInput);
  }
}
