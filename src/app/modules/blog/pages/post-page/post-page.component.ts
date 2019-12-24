import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { IPost } from '@models/post.interface';
import { selectSelectedPost, selectSelectedPostComments } from '@store/selectors/post.selector';
import { GetPost, GetPostComments } from '@store/actions/post.actions';
import { IComment } from '@models/comment.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private postId: number;
  public post$: Observable<IPost> = this.store.pipe(select(selectSelectedPost));
  public comments$: Observable<IComment[]> = this.store.pipe(select(selectSelectedPostComments));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(new GetPost(+this.postId));
    this.store.dispatch(new GetPostComments(this.postId));
  }

}
