import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContactType } from '../enum/contactType.enum';

@ObjectType('ContactResponse')
export class ContactResponse {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => Int, { nullable: true })
  ownerId: number;

  @Field((_type) => String, { nullable: true })
  type: ContactType;

  @Field((_type) => String, { nullable: true })
  url: string;
}
