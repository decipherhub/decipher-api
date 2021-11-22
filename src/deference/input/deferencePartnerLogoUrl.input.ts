import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDeferencePartnerLogoUrlInput {
  @Field()
  name: string;

  @Field()
  imageUrl: string;
}

@InputType()
export class UpdateDeferencePartnerLogoUrlInput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;
}