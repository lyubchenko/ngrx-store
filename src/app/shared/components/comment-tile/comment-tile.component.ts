import { Component, Input } from '@angular/core';
import { IComment } from '@models/comment.interface';

@Component({
  selector: 'app-comment-tile',
  templateUrl: './comment-tile.component.html',
  styleUrls: ['./comment-tile.component.scss']
})
export class CommentTileComponent {
  @Input() comment: IComment;

  constructor() { }
}
