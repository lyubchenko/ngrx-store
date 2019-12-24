import { Action } from '@ngrx/store';

import { IUser } from '@models/user.interface';
import { IPost } from '@models/post.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserPosts = '[User] Get Users Posts',
  GetUserPostsSuccess = '[User] Get Users Posts Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: IUser) {}
}

export class GetUserPosts implements Action {
  public readonly type = EUserActions.GetUserPosts;
  constructor(public payload: number) {}
}

export class GetUserPostsSuccess implements Action {
  public readonly type = EUserActions.GetUserPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess | GetUserPosts | GetUserPostsSuccess;
