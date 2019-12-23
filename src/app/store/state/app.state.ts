import { RouterReducerState } from '@ngrx/router-store';

import {initialUserState, IUserState } from './user.state';
import { initialPostState, IPostState } from './post.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  posts: IPostState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  posts: initialPostState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
