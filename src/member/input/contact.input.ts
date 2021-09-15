import { Field, InputType, Int } from '@nestjs/graphql';
import { ContactType } from '../enum/contactType.enum';

@InputType()
export class ContactCreateInput {
  @Field((_type) => String)
  type: ContactType;

  @Field()
  url: string;
}

@InputType()
export class ContactConnectInput {
  @Field((_type) => Int)
  id: number;
}

@InputType()
export class ContactCreateOrConnectInput {
  @Field((_type) => [ContactCreateInput], { nullable: true })
  create: ContactCreateInput[];

  @Field((_type) => [ContactConnectInput], { nullable: true })
  connect: ContactConnectInput[];
}
