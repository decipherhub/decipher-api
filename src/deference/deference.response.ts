import 'reflect-metadata';
import { DeferenceImageResponse } from '../DeferenceImage/deferenceImage.response';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DeferenceResponse')
export class DeferenceResponse {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;

  // @Field((type) => [DeferenceImageResponse])
  // deferenceImages: [DeferenceImageResponse];
}