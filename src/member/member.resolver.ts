import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMemberInput } from './member.input';
import { MemberService } from './member.service';
import { MemberType } from './member.type';

@Resolver((_of) => MemberType)
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query((_returns) => MemberType)
  member(@Args('id') id: number) {
    return this.memberService.getMember(id);
  }

  @Query((_returns) => [MemberType])
  members() {
    return this.memberService.getMembers();
  }

  @Mutation((_returns) => MemberType)
  createMember(
    @Args('createMemberInput') createMemberInput: CreateMemberInput,
  ) {
    return this.memberService.createMember(createMemberInput);
  }
}
