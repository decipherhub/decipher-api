import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DeferenceImageResponse')
export class DeferenceImageResponse {
  @Field((type) => Int)
  id: number;

  @Field()
  type: string;

  @Field()
  imageUrl: string;
}
