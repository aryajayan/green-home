import { Component, OnInit, ViewChild } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';

import * as fromApp from '../../app.reducer';

import * as UserActions from '../store/user.action';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',

  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  @ViewChild('dp') dp: NgbDatepicker;

  constructor(
    private fb: FormBuilder,

    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.signupForm = new FormGroup(
      {
        id: this.fb.control(-1),

        name: this.fb.control(null, [Validators.required]),

        dob: this.fb.control(new Date(), Validators.required),

        email: this.fb.control(null, [Validators.required, Validators.email]),

        password: this.fb.control(null, [Validators.required]),

        confirm: this.fb.control(null, [Validators.required]),
      },
      { validators: this.matchPassword }
    );
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;

    const confirm = control.get('confirm').value;

    if (password != confirm) {
      return { noMatch: true };
    }

    return null;
  }

  navigateDateEvent(event) {
    this.signupForm.patchValue({
      dob: event.next,
    });
  }

  signupClicked() {
    this.store.dispatch(
      UserActions.Signup({
        email: this.signupForm.get('email').value,

        name: this.signupForm.get('name').value,

        dob: this.signupForm.get('dob').value,

        password: this.signupForm.get('password').value,
      })
    );
  }
}
