import { Component, Input } from '@angular/core';
import { IPost } from '@models/post.interface';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent  {
  @Input() post: IPost;
}
