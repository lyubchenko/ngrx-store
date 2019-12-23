import { Action } from '@ngrx/store';

import { IPost } from '@models/post.interface';

export enum EPostActions {
  GetPosts = '[Post] get Posts',
  GetPostsSuccess = '[Post] get Posts Success',
  GetPost = '[Post] get Post',
  GetPostSuccess = '[Post] get Post success'
}

export class GetPosts implements Action {
  public readonly type = EPostActions.GetPosts;
}

export class GetPostsSuccess implements Action {
  public readonly type = EPostActions.GetPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export class GetPost implements Action {
  public readonly type = EPostActions.GetPost;
  constructor(public payload: number) {}
}

export class GetPostSuccess implements Action {
  public readonly type = EPostActions.GetPostSuccess;
  constructor(public payload: IPost) {}
}

export type PostActions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess;
