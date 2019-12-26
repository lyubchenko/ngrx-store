import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { AppState } from '@store/state/app.state';
import {
  GetPost,
  GetPostSuccess,
  EPostActions,
  GetPosts,
  GetPostsSuccess,
  GetPostComments,
  GetPostCommentsSuccess
} from '@store/actions/post.actions';
import { PostService } from '@services/post/post.service';
import { selectPostsList } from '@store/selectors/post.selector';
import { Post} from '@models/post.model';
import { Comment } from '@models/comment.model';

@Injectable()
export class PostEffects {
  @Effect()
  getPost$ = this.actions$.pipe(
    ofType<GetPost>(EPostActions.GetPost),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPostsList))),
    switchMap( ([id, posts]) => {
      const selectedPost = posts && posts.length ? posts.filter( post => post.id === +id)[0] : null;
      return of(new GetPostSuccess(selectedPost));
    })
  );

  @Effect()
  getPosts$ = this.actions$.pipe(
    ofType<GetPosts>(EPostActions.GetPosts),
    switchMap( () => this.postService.getPosts()),
    switchMap( (posts: Post[]) => of(new GetPostsSuccess(posts)))
  );

  @Effect()
  getPostComments$ = this.actions$.pipe(
    ofType<GetPostComments>(EPostActions.GetPostComments),
    switchMap( (id) => this.postService.getPostComments(id)),
    switchMap( (comments: Comment[]) => of(new GetPostCommentsSuccess(comments)))
  );

  constructor(
    private postService: PostService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
