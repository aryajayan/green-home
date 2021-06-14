import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserBannerComponent } from './user-banner/user-banner.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/uesr.effect';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    UserBannerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild([{ path: '', component: UserComponent }]),
  ],
})
export class UserModule {}
