import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';
import { selectSelectedUser, selectSelectedUserPosts } from '@store/selectors/user.selector';
import { GetUser, GetUserPosts } from '@store/actions/user.actions';
import { Post } from '@models/post.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  private userId: number;
  public user$: Observable<User> = this.store.pipe(select(selectSelectedUser));
  public posts$: Observable<Post[]> = this.store.pipe(select(selectSelectedUserPosts));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.userId = Number(this.activatedRoute.snapshot.params.id);
    this.store.dispatch(new GetUser(this.userId));
    this.store.dispatch(new GetUserPosts(this.userId));
  }

}
