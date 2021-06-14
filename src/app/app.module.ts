import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/store/uesr.effect';
import * as fromUser from './user/store/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthInterceptorService } from './shared/auth_interceptor.service';
import { environment } from 'src/environments/environment';

export const storeDevTools = !environment.production
  ? [StoreDevtoolsModule.instrument()]
  : [];

@NgModule({
  declarations: [AppComponent, HeaderComponent],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
    NgbModule,
    HomeModule,
    storeDevTools,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
