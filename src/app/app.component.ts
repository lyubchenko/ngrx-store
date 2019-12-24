import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IAppState } from '@store/state/app.state';
import { Store } from '@ngrx/store';
import { GetUsers } from '@store/actions/user.actions';
import { GetPosts } from '@store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetPosts());
    this.store.dispatch(new GetUsers());
  }
}
