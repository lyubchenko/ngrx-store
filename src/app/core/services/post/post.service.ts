import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '@models/post.model';
import { Comment } from '@models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostComments(id): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=6`);
  }
}
