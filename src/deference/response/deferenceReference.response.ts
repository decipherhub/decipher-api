import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DeferenceReferenceResponse')
export class DeferenceReferenceResponse {
  @Field((type) => Int)
  id: number;

  @Field()
  type: string;

  @Field()
  link: string;
}
