import { PostActions, EPostActions } from '@store/actions/post.actions';
import { initialPostState, IPostState} from '@store/state/post.state';

export const postReducers = (state = initialPostState, action: PostActions): IPostState => {
  switch (action.type) {
    case EPostActions.GetPostsSuccess: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case EPostActions.GetPostSuccess: {
      return {
        ...state,
        selectedPost: action.payload
      };
    }

    default:
      return state;
  }
};
