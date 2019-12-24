import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { IPostState } from '@store/state/post.state';

const selectPosts = (state: IAppState) => state.posts;
export const selectPostsList = createSelector(
  selectPosts,
  (state: IPostState) => state.posts
);

export const selectSelectedPost = createSelector(
  selectPosts,
  (state: IPostState) => state.selectedPost
);

export const selectSelectedPostComments = createSelector(
  selectPosts,
  (state: IPostState) => state.selectedPostComments
);
