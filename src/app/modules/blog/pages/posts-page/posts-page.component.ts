import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetPosts } from '@store/actions/post.actions';
import { AppState } from '@store/state/app.state';
import { selectPostsList } from '@store/selectors/post.selector';
import { Observable } from 'rxjs';
import { Post } from '@models/post.model';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  public posts$: Observable<Post[]> = this.store.pipe(select(selectPostsList));
  public columnsToDisplay: string[] = ['Article name', 'Article body', 'User'];
  public columnsToDisplayRow: string[] = ['title', 'body', 'userId'];
  public url = '/posts/';

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new GetPosts());
  }

}
