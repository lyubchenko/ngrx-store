import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { AppState } from '@store/state/app.state';
import {
  GetUserSuccess,
  GetUser,
  EUserActions,
  GetUsersSuccess,
  GetUsers,
  GetUserPosts,
  GetUserPostsSuccess
} from '@store/actions/user.actions';
import { UserService } from '@services/user/user.service';
import { selectUsersList } from '@store/selectors/user.selector';
import { User } from '@models/user.model';
import { Post } from '@models/post.model';
import { selectPostsList } from '@store/selectors/post.selector';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUsersList))),
    switchMap(([id, users]) => {
      const selectedUser = users && users.length ? users.filter( user => user.id === +id)[0] : null;
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap( () => this.userService.getUsers()),
    switchMap((users: User[]) => of(new GetUsersSuccess(users)))
  );

  @Effect()
  getUserPosts$ = this.actions$.pipe(
    ofType<GetUserPosts>(EUserActions.GetUserPosts),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectPostsList))),
    switchMap(([id, posts]) => {
      const selectedUserPosts: Post[] = posts && posts.length ? posts.filter( post => post.userId === +id) : null;
      return of(new GetUserPostsSuccess(selectedUserPosts));
    })
  );
}
