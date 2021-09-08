import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  MemberCreateInput,
  MemberDeleteInput,
  MemberFindInput,
  MemberFindManyInput,
  MemberUpdateManyInput,
} from './input/member.input';
import { MemberService } from './member.service';
import { MemberResponse } from './response/member.response';

@Resolver()
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query((_returns) => MemberResponse)
  member(@Args('memberFindUniqueInput') memberFindInput: MemberFindInput) {
    return this.memberService.findMember(memberFindInput);
  }

  @Query((_returns) => [MemberResponse])
  members(
    @Args('memberFindManyInput') memberFindManyInput: MemberFindManyInput,
  ) {
    return this.memberService.findMembers(memberFindManyInput);
  }

  @Mutation((_returns) => MemberResponse)
  createMember(
    @Args('memberCreateInput') memberCreateInput: MemberCreateInput,
  ) {
    return this.memberService.createMember(memberCreateInput);
  }

  @Mutation((_returns) => MemberResponse)
  updateMember(
    @Args('memberUpdateInput') memberUpdateManyInput: MemberUpdateManyInput,
  ) {
    return this.memberService.updateMember(memberUpdateManyInput);
  }

  @Mutation((_returns) => MemberResponse)
  deleteMember(
    @Args('memberCreateInput') memberDeleteInput: MemberDeleteInput,
  ) {
    return this.memberService.deleteMember(memberDeleteInput);
  }
}
