import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { IUser } from '@models/user.interface';
import { selectSelectedUser, selectSelectedUserPosts } from '@store/selectors/user.selector';
import { GetUser, GetUserPosts } from '@store/actions/user.actions';
import { IPost } from '@models/post.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  private userId: number;
  public user$: Observable<IUser> = this.store.pipe(select(selectSelectedUser));
  public posts$: Observable<IPost[]> = this.store.pipe(select(selectSelectedUserPosts));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.userId = Number(this.activatedRoute.snapshot.params.id);
    this.store.dispatch(new GetUser(this.userId));
    this.store.dispatch(new GetUserPosts(this.userId));
  }

}
