import { Action } from '@ngrx/store';

import { IPost } from '@models/post.interface';
import { IComment } from '@models/comment.interface';

export enum EPostActions {
  GetPosts = '[Post] Get Posts',
  GetPostsSuccess = '[Post] Get Posts Success',
  GetPost = '[Post] Get Post',
  GetPostSuccess = '[Post] Get Post success',
  GetPostComments = '[Post] Get Post Comments',
  GetPostCommentsSuccess = '[Post] Get Post Comments Success',
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

export class GetPostComments implements Action {
  public readonly type = EPostActions.GetPostComments;
  constructor(public payload: number) {}
}

export class GetPostCommentsSuccess implements Action {
  public readonly type = EPostActions.GetPostCommentsSuccess;
  constructor(public payload: IComment[]) {}
}

export type PostActions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess | GetPostComments | GetPostCommentsSuccess;
