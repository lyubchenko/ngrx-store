import { IUser } from '@models/user.interface';
import { IPost } from '@models/post.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
  selectedUserPosts: IPost[];
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  selectedUserPosts: null
};
