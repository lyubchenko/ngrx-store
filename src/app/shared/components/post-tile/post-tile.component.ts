import { Component, Input } from '@angular/core';
import { Post } from '@models/post.model';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent  {
  @Input() post: Post;
}
