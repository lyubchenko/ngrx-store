import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@store/state/app.state';
import { Observable } from 'rxjs';
import { IPost } from '@models/post.interface';
import { selectSelectedPost } from '@store/selectors/post.selector';
import { GetPost } from '@store/actions/post.actions';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private postId: number;
  public post$: Observable<IPost> = this.store.pipe(select(selectSelectedPost));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.postId = Number(this.activatedRoute.snapshot.params.id);
    this.store.dispatch(new GetPost(this.postId));
  }

}
