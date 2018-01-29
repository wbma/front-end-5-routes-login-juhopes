import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MediaService } from './services/media.service';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
