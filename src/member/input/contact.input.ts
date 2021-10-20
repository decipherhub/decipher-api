import { Field, InputType } from '@nestjs/graphql';
import { ContactType } from '../enum/contactType.enum';

@InputType()
export class ContactInput {
  @Field((_type) => ContactType)
  type: ContactType;

  @Field()
  url: string;
}
