import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'user/guard/user.guard';
import {
  MemberFindManyInput,
  MemberInput,
  MemberUniqueInput,
  MemberUpdateInput,
} from './input/member.input';
import { MemberService } from './member.service';
import { MemberResponse } from './response/member.response';

@Resolver()
export class MemberResolver {
  constructor(private memberService: MemberService) {}
  @Query((_returns) => MemberResponse)
  member(@Args('memberUniqueInput') memberUniqueInput: MemberUniqueInput) {
    return this.memberService.findMemberById(memberUniqueInput);
  }

  @Query((_returns) => [MemberResponse])
  members(
    @Args('memberFindManyInput') memberFindManyInput: MemberFindManyInput,
  ) {
    return this.memberService.findMembers(memberFindManyInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MemberResponse)
  createMember(@Args('memberInput') memberInput: MemberInput) {
    return this.memberService.createMember(memberInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MemberResponse)
  updateMember(
    @Args('memberUpdateInput') memberUpdateManyInput: MemberUpdateInput,
  ) {
    return this.memberService.updateMember(memberUpdateManyInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((_returns) => MemberResponse)
  deleteMember(
    @Args('memberUniqueInput') memberUniqueInput: MemberUniqueInput,
  ) {
    return this.memberService.deleteMember(memberUniqueInput);
  }
}
