import { PostActions, EPostActions } from '@store/actions/post.actions';
import { initialPostState, PostState} from '@store/state/post.state';

export const postReducers = (state = initialPostState, action: PostActions): PostState => {
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
    case EPostActions.GetPostCommentsSuccess: {
      return {
        ...state,
        selectedPostComments: action.payload
      };
    }

    default:
      return state;
  }
};
