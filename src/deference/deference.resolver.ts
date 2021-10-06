import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateDeferenceInput, UpdateDeferenceInput } from './deference.input';
import { DeferenceResponse } from './deference.response';
import { DeferenceService } from './deference.service';

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

  @Mutation((returns) => DeferenceResponse)
  createDeference(
    @Args('createDeferenceInput') createDeferenceInput: CreateDeferenceInput,
  ) {
    return this.deferenceService.createDeference(createDeferenceInput);
  }

  @Mutation((returns) => DeferenceResponse)
  updateDeference(
    @Args('updateDeferenceInput') updateDeferenceInput: UpdateDeferenceInput,
  ) {
    return this.deferenceService.updateDeference(updateDeferenceInput);
  }

  @Mutation((returns) => DeferenceResponse)
  deleteDeference(@Args('id') id: number) {
    return this.deferenceService.deleteDeference(id);
  }
}
