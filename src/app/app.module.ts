import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './views/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { ClientpersonformComponent } from './views/clientpersonform/clientpersonform.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { AuthenticationService } from './services/authentication.service';
import { GirlService } from './services/girl.service';
import { LogoutService } from './services/logout.service';
import { SigninService } from './services/signin.service';
import { GirlComponent } from './views/girl/girl.component';
import { AuthGuard } from './guard/auth.guard';
import { TokeninterceptorService } from './interceptor/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    HeaderComponent,
    StartComponent,
    LoginComponent,
    ClientpersonformComponent,
    EntrarComponent,
    GirlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, GirlService, LogoutService, SigninService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
