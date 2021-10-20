import { registerEnumType } from '@nestjs/graphql';

export enum ProjectUrlType {
  MEDIUM = 'MEDIUM',
  YOUTUBE = 'YOUTUBE',
}

registerEnumType(ProjectUrlType, {
  name: 'ProjectUrlType',
});
