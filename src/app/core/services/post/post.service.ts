import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from '@models/post.interface';
import { IComment } from '@models/comment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
  ) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostComments(id): Observable<IComment[]> {
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=6`);
  }
}
