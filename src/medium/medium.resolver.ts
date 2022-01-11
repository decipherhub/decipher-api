import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'user/guard/user.guard';
import {
  MediumInput,
  MediumFindManyInput,
  MediumUniqueInput,
  MediumUpdateInput,
  MediumCountInput,
} from './input/medium.input';
import { TagCreateInput, TagUniqueInput } from './input/tag.input';
import { MediumService } from './medium.service';
import { CountResponse, MediumResponse } from './response/medium.response';
import { TagResponse } from './response/tag.response';

@Resolver()
export class MediumResolver {
  constructor(private mediumService: MediumService) {}
  @Query((_returns) => MediumResponse)
  medium(@Args('mediumUniqueInput') mediumUniqueInput: MediumUniqueInput) {
    return this.mediumService.findMediumById(mediumUniqueInput);
  }

  @Query((_returns) => [MediumResponse])
  mediums(
    @Args('mediumFindManyInput') mediumFindManyInput: MediumFindManyInput,
  ) {
    return this.mediumService.findMediums(mediumFindManyInput);
  }

  @Query((_returns) => [TagResponse])
  tags() {
    return this.mediumService.findTags();
  }

  @Query((_returns) => CountResponse)
  countTotalMedium(
    @Args('mediumCountInput') mediumCountInput: MediumCountInput,
  ) {
    return this.mediumService.countMedium(mediumCountInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => TagResponse)
  createTag(@Args('tagCreateInput') tagCreateInput: TagCreateInput) {
    return this.mediumService.createTag(tagCreateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => TagResponse)
  deleteTag(@Args('tagUniqueInput') tagUniqueInput: TagUniqueInput) {
    return this.mediumService.deleteTag(tagUniqueInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MediumResponse)
  createMedium(@Args('mediumCreateInput') mediumCreateInput: MediumInput) {
    return this.mediumService.createMedium(mediumCreateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MediumResponse)
  updateMedium(
    @Args('mediumUpdateInput') mediumUpdateInput: MediumUpdateInput,
  ) {
    return this.mediumService.updateMedium(mediumUpdateInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MediumResponse)
  deleteMedium(
    @Args('mediumUniqueInput') mediumUniqueInput: MediumUniqueInput,
  ) {
    return this.mediumService.deleteMedium(mediumUniqueInput);
  }
}
