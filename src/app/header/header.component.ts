import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../shared/user.model';
import * as fromUser from '../user/store/user.reducer';
import { selectUser } from '../user/store/user.selector';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() userFormClick = new EventEmitter<number>();
  isAuthenticated: boolean;

  constructor(private router: Router, private store: Store<fromUser.State>) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user: User) => {
      this.isAuthenticated = user?.token ? true : false;
    });
  }

  userFormClicked(type) {
    this.userFormClick.emit(type);
  }

  navigateToUser(value: boolean) {
    if (value == true) {
      this.router.navigate(['/signup', { newUser: value }]);
    } else {
      this.router.navigate(['/login', { newUser: value }]);
    }
  }

  onLogout() {}
}
