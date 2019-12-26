import { createSelector } from '@ngrx/store';

import { AppState } from '@store/state/app.state';
import { PostState } from '@store/state/post.state';

const selectPosts = (state: AppState) => state.posts;
export const selectPostsList = createSelector(
  selectPosts,
  (state: PostState) => state.posts
);

export const selectSelectedPost = createSelector(
  selectPosts,
  (state: PostState) => state.selectedPost
);

export const selectSelectedPostComments = createSelector(
  selectPosts,
  (state: PostState) => state.selectedPostComments
);
