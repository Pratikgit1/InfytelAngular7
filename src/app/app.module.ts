import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { CallDetailsComponent } from './call-details/call-details.component';
import { RestService } from './rest.service';
import { ViewPlanService } from './view-plan/view-plan.service';
import { ProfileService } from './profile/profile.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { HomeService } from './home/home.service';
import { AddFriendService } from './add-friend/add-friend.service';
import { InformationService } from './information.service';
import { CallDetailsService } from './call-details/call-details.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent,
    ViewPlanComponent,
    AddFriendComponent,
    CallDetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [
    RestService,
    LoginService,
    RegisterService,
    HomeService,
    ProfileService,
    ViewPlanService,
    AddFriendService,
    InformationService,
    CallDetailsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
