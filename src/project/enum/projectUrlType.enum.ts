import { registerEnumType } from '@nestjs/graphql';

export enum ProjectUrlType {
  MEDIUM = 'MEDIUM',
  YOUTUBE = 'YOUTUBE',
  WEBSITE = 'WEBSITE',
}

registerEnumType(ProjectUrlType, {
  name: 'ProjectUrlType',
});
