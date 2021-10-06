import 'reflect-metadata';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DeferenceImageResponse } from 'deferenceImage/deferenceImage.response';

@ObjectType('DeferenceResponse')
export class DeferenceResponse {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;

  @Field((type) => [DeferenceImageResponse], { nullable: true })
  deferenceImages: DeferenceImageResponse[];
}
