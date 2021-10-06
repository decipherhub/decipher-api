import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediumResponse } from './medium.response';
import { TagResponse } from './tag.response';

@ObjectType('MediumTag')
export class MediumTagResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => TagResponse, { nullable: true })
  tag: TagResponse;

  @Field((_type) => MediumResponse, { nullable: true })
  medium: MediumResponse;
}
