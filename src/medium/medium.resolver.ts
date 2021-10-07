import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  MediumInput,
  MediumFindManyInput,
  MediumUniqueInput,
  MediumUpdateInput,
} from './input/medium.input';
import { TagCreateInput, TagUniqueInput } from './input/tag.input';
import { MediumService } from './medium.service';
import { MediumResponse } from './response/medium.response';
import { TagResponse } from './response/tag.response';

@Resolver()
export class MediumResolver {
  constructor(private mediumService: MediumService) {}
  @Query((_returns) => MediumResponse)
  medium(@Args('mediumFindByIdInput') mediumUniqueInput: MediumUniqueInput) {
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

  @Mutation((_returns) => TagResponse)
  createTag(@Args('tagCreateInput') tagCreateInput: TagCreateInput) {
    return this.mediumService.createTag(tagCreateInput);
  }

  @Mutation((_returns) => TagResponse)
  deleteTag(@Args('tagUniqueInput') tagUniqueInput: TagUniqueInput) {
    return this.mediumService.deleteTag(tagUniqueInput);
  }

  @Mutation((_returns) => MediumResponse)
  createMedium(@Args('mediumCreateInput') mediumCreateInput: MediumInput) {
    return this.mediumService.createMedium(mediumCreateInput);
  }

  @Mutation((_returns) => MediumResponse)
  updateMedium(
    @Args('mediumUpdateInput') mediumUpdateInput: MediumUpdateInput,
  ) {
    return this.mediumService.updateMedium(mediumUpdateInput);
  }

  @Mutation((_returns) => MediumResponse)
  deleteMedium(
    @Args('mediumUniqueInput') mediumUniqueInput: MediumUniqueInput,
  ) {
    return this.mediumService.deleteMedium(mediumUniqueInput);
  }
}
