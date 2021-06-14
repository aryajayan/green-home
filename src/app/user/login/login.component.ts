import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/user.reducer';
import * as UserActions from '../store/user.action';
import { selectError } from '../store/user.selector';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.State>,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: this.fb.control(null, [Validators.email, Validators.required]),
      password: this.fb.control(null, [Validators.required]),
    });

    this.store.select(selectError).subscribe((err) => {
      if (err) {
        this.handleError(err);
      }
    });
  }

  onLogin() {
    this.store.dispatch(
      UserActions.Login({
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      })
    );
  }
  handleError(err: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.message = err['error']['error']['message'];
  }
}
