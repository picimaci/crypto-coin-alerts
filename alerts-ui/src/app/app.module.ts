import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule, BsDropdownModule, TooltipModule, ModalModule } from 'ngx-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module'

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

import { UsersService } from './users.service';
import { ErrorService } from './error.service';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { JWTInterceptor } from './jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    NewAccountComponent,
    LoginComponent,
    VerifyEmailComponent
  ],
  imports: [
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    TranslateModule.forRoot()
  ],
  providers: [
    UsersService,
    AuthService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
