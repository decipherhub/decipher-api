import { registerEnumType } from '@nestjs/graphql';

export enum ContactType {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  MEDIUM = 'MEDIUM',
  EMAIL = 'EMAIL',
  WEBSITE = 'WEBSITE',
  BLOG = 'BLOG',
  BRUNCH = 'BRUNCH',
  FACEBOOK = 'FACEBOK',
}

registerEnumType(ContactType, {
  name: 'ContactType',
});
