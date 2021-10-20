import { registerEnumType } from '@nestjs/graphql';

export enum ContactType {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  MEDIUM = 'MEDIUM',
  EMAIL = 'EMAIL',
}

registerEnumType(ContactType, {
  name: 'ContactType',
});
