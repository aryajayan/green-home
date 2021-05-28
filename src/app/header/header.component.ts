import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() userFormClick = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

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
}
