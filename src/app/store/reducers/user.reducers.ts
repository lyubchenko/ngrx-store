import { EUserActions, UserActions } from '@store/actions/user.actions';
import { initialUserState, UserState } from '@store/state/user.state';

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    case EUserActions.GetUserPostsSuccess: {
      return {
        ...state,
        selectedUserPosts: action.payload
      };
    }

    default:
      return state;
  }
};
