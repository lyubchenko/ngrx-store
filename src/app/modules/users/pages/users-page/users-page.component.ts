import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetUsers } from '@store/actions/user.actions';
import { IAppState } from '@store/state/app.state';
import { selectUsersList } from '@store/selectors/user.selector';
import { Observable } from 'rxjs';
import { IUser } from '@models/user.interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public users$: Observable<IUser[]> = this.store.pipe(select(selectUsersList));
  public columnsToDisplay: string[] = ['Name', 'Username', 'Email', 'Address'];
  public columnsToDisplayRow: string[] = ['name', 'username', 'email', 'address'];
  public url = '/users/';
  public pageSize = 10;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new GetUsers());
  }

}
