import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetUsers } from '@store/actions/user.actions';
import { AppState } from '@store/state/app.state';
import { selectUsersList } from '@store/selectors/user.selector';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public users$: Observable<User[]> = this.store.pipe(select(selectUsersList));
  public columnsToDisplay: string[] = ['Name', 'Username', 'Email', 'Address'];
  public columnsToDisplayRow: string[] = ['name', 'username', 'email', 'address'];
  public url = '/users/';
  public pageSize = 10;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new GetUsers());
  }

}
