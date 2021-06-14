import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';
import { selectUser } from '../user/store/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<fromUser.State>) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((data) => {
      console.log(data);
    });
  }
}
