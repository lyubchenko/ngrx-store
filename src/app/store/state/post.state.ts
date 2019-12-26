import { Post } from '@models/post.model';
import { Comment } from '@models/comment.model';

export interface PostState {
  posts: Post[];
  selectedPost: Post;
  selectedPostComments: Comment[];
}

export const initialPostState: PostState  = {
  posts: null,
  selectedPost: null,
  selectedPostComments: null
};
