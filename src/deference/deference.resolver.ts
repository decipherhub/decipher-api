import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import {
  CreateDeferenceInput,
  UpdateDeferenceInput,
} from './input/deference.input';
import { DeferenceResponse } from './response/deference.response';
import { DeferenceService } from './deference.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'user/guard/user.guard';

@Resolver((of) => DeferenceResponse)
export class DeferenceResolver {
  constructor(private deferenceService: DeferenceService) {}

  @Query((returns) => DeferenceResponse, { nullable: true })
  getDeferenceById(@Args('id') id: number) {
    return this.deferenceService.getDeference(id);
  }

  @Query((returns) => [DeferenceResponse])
  getDeferences() {
    return this.deferenceService.getDeferences();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => DeferenceResponse)
  createDeference(
    @Args('createDeferenceInput') createDeferenceInput: CreateDeferenceInput,
  ) {
    return this.deferenceService.createDeference(createDeferenceInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => DeferenceResponse)
  updateDeference(
    @Args('updateDeferenceInput') updateDeferenceInput: UpdateDeferenceInput,
  ) {
    return this.deferenceService.updateDeference(updateDeferenceInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => DeferenceResponse)
  deleteDeference(@Args('id') id: number) {
    return this.deferenceService.deleteDeference(id);
  }
}
