import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '@models/user.interface';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(
      shareReplay()
    );
  }
}
