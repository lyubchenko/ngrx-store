import { User } from '@models/user.model';
import { Post } from '@models/post.model';

export interface UserState {
  users: User[];
  selectedUser: User;
  selectedUserPosts: Post[];
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null,
  selectedUserPosts: null
};
