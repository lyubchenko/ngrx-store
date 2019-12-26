import { createSelector } from '@ngrx/store';

import { AppState } from '@store/state/app.state';
import { UserState } from '@store/state/user.state';
import { PostState } from '@store/state/post.state';

const selectUsers = (state: AppState) => state.users;
const selectPosts = (state: AppState) => state.posts;

export const selectUsersList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);

export const selectSelectedUserPosts = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUserPosts
);
