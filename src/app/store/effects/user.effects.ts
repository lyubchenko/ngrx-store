import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '@store/state/app.state';
import {
  GetUserSuccess,
  GetUser,
  EUserActions,
  GetUsersSuccess,
  GetUsers
} from '@store/actions/user.actions';
import { UserService } from '@services/user/user.service';
import { selectUsersList } from '@store/selectors/user.selector';
import { IUser} from '@models/user.interface';

@Injectable()
export class UserEffects {
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
    switchMap((users: IUser[]) => of(new GetUsersSuccess(users)))
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
