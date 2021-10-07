import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DeferenceImageResponse } from 'deference/response/deferenceImage.response';

@ObjectType('DeferenceResponse')
export class DeferenceResponse {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  year: number;

  @Field((type) => [DeferenceImageResponse], { nullable: true })
  deferenceImage: DeferenceImageResponse[];
}
