import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MediumTagResponse } from './mediumTag.response';

@ObjectType('Tag')
export class TagResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => String)
  name: string;

  @Field((_type) => [MediumTagResponse])
  mediums: MediumTagResponse[];
}
