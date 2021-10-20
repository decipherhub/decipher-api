import { registerEnumType } from '@nestjs/graphql';

export enum ProjectRoleType {
  TEAM_LEADER = 'TEAM_LEADER',
  TEAM_MEMBER = 'TEAM_MEMBER',
}

registerEnumType(ProjectRoleType, {
  name: 'ProjectRoleType',
});
