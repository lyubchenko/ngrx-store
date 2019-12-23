import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import { IAppState } from '@store/state/app.state';
import { postReducers } from './post.reducers';
import { userReducers } from './user.reducers';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  users: userReducers,
  posts: postReducers
};


export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
