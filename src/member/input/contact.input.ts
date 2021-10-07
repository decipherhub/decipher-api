import { Field, InputType } from '@nestjs/graphql';
import { ContactType } from '../enum/contactType.enum';

@InputType()
export class ContactInput {
  @Field((_type) => String)
  type: ContactType;

  @Field()
  url: string;
}
