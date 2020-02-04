import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';


import { FormsModule } from '@angular/forms';
import { FirbaseserviceService } from './firbaseservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [FirbaseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
