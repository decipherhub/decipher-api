import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediumResponse } from './medium.response';
import { TagResponse } from './tag.response';

@ObjectType('MediumTagResponse')
export class MediumTagResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => TagResponse)
  tag: TagResponse;

  @Field((_type) => MediumResponse)
  medium: MediumResponse;
}
