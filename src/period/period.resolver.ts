import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Period, PeriodMember } from '@prisma/client';
import { PeriodFindInput, PeriodGenerationInput } from './input/period.input';
import {
  PeriodMemberCreateOrUpdateInput,
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

  @Mutation((_returns) => PeriodResponse)
  createPeriod(
    @Args('periodGenerationInput') periodGenerationInput: PeriodGenerationInput,
  ): Promise<Period> {
    return this.periodService.createPeriod(periodGenerationInput);
  }

  @Mutation((_returns) => PeriodMemberResponse)
  createPeriodMember(
    @Args('periodMemberCreateInput')
    periodMemberCreateInput: PeriodMemberCreateOrUpdateInput,
  ): Promise<PeriodMember> {
    return this.periodService.createPeriodMember(periodMemberCreateInput);
  }

  @Mutation((_returns) => PeriodMemberResponse)
  updatePeriodMember(
    @Args('periodMemberUpdateInput')
    periodMemberUpdateInput: PeriodMemberCreateOrUpdateInput,
  ): Promise<PeriodMember> {
    return this.periodService.updatePeriodMember(periodMemberUpdateInput);
  }

  @Mutation((_returns) => PeriodMemberResponse)
  deletePeriodMember(
    @Args('periodMemberUniqueInput')
    periodMemberUniqueInput: PeriodMemberUniqueInput,
  ): Promise<PeriodMember> {
    return this.periodService.deletePeriodMember(periodMemberUniqueInput);
  }
}
