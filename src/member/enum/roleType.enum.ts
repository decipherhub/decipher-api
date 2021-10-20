import { registerEnumType } from '@nestjs/graphql';

export enum RoleType {
  PRESIDENT = 'PRESIDENT',
  VICE_PRESIDENT = 'VICE_PRESIDENT',
  MEDIA_LEAD = 'MEDIA_LEAD',
  MANAGER = 'MANAGER',
  MEMBER = 'MEMBER',
  MENTOR = 'MENTOR',
}

registerEnumType(RoleType, {
  name: 'RoleType',
});
