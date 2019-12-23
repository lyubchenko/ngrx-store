import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetPosts } from '@store/actions/post.actions';
import { IAppState } from '@store/state/app.state';
import { selectPostsList } from '@store/selectors/post.selector';
import { Observable } from 'rxjs';
import { IPost } from '@models/post.interface';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  public posts$: Observable<IPost[]> = this.store.pipe(select(selectPostsList));
  public columnsToDisplay: string[] = ['Article name', 'Article body', 'User'];
  public columnsToDisplayRow: string[] = ['title', 'body', 'userId'];
  public url = '/posts/';

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetPosts());
  }

}
