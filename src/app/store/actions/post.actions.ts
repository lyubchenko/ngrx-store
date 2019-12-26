import { Action } from '@ngrx/store';

import { Post } from '@models/post.model';
import { Comment } from '@models/comment.model';

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
  constructor(public payload: Post[]) {}
}

export class GetPost implements Action {
  public readonly type = EPostActions.GetPost;
  constructor(public payload: number) {}
}

export class GetPostSuccess implements Action {
  public readonly type = EPostActions.GetPostSuccess;
  constructor(public payload: Post) {}
}

export class GetPostComments implements Action {
  public readonly type = EPostActions.GetPostComments;
  constructor(public payload: number) {}
}

export class GetPostCommentsSuccess implements Action {
  public readonly type = EPostActions.GetPostCommentsSuccess;
  constructor(public payload: Comment[]) {}
}

export type PostActions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess | GetPostComments | GetPostCommentsSuccess;
