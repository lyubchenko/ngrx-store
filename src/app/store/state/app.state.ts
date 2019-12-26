import { RouterReducerState } from '@ngrx/router-store';

import {initialUserState, UserState } from './user.state';
import { initialPostState, PostState } from './post.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  posts: PostState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  posts: initialPostState
};

export function getInitialState(): AppState {
  return initialAppState;
}
