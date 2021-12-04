import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('DeferencePartnerLogoUrlResponse')
export class DeferencePartnerLogoUrlResponse {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;
}
