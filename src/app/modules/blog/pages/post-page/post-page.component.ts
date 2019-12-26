import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { Post } from '@models/post.model';
import { selectSelectedPost, selectSelectedPostComments } from '@store/selectors/post.selector';
import { GetPost, GetPostComments } from '@store/actions/post.actions';
import { Comment } from '@models/comment.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private postId: number;
  public post$: Observable<Post> = this.store.pipe(select(selectSelectedPost));
  public comments$: Observable<Comment[]> = this.store.pipe(select(selectSelectedPostComments));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(new GetPost(+this.postId));
    this.store.dispatch(new GetPostComments(this.postId));
  }

}
