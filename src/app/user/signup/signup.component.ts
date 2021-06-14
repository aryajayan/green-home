import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { NgbDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

import * as fromUser from '../store/user.reducer';

import * as UserActions from '../store/user.action';
import { selectError, selectUser } from '../store/user.selector';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',

  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  maxDate = {
    year: new Date().getUTCFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  minDate = { year: new Date().getUTCFullYear() - 130, month: 12, day: 31 };

  @ViewChild('dp') dp: NgbDatepicker;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.State>,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.createFormGroup();
    this.store.select(selectError).subscribe((err) => {
      console.log(err);
      if (err) {
        this.handleError(err);
      }
    });
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

  handleError(err: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.message = err['error']['error']['message'];
  }
}
