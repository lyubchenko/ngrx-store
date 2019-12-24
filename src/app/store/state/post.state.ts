import { IPost } from '@models/post.interface';
import { IComment } from '@models/comment.interface';

export interface IPostState {
  posts: IPost[];
  selectedPost: IPost;
  selectedPostComments: IComment[];
}

export const initialPostState: IPostState  = {
  posts: null,
  selectedPost: null,
  selectedPostComments: null
};
