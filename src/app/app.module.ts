import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyComponent } from './auth/verify/verify.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthService } from "src/app/auth/services/auth.service";

@NgModule({
	declarations: [
	AppComponent,
 SignInComponent,
 SignUpComponent,
 ForgotPasswordComponent,
 VerifyComponent,
 DashboardComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule, // required animations module
	ToastrModule.forRoot(), // ToastrModule added
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule,
	AngularFirestoreModule,
	AngularFireStorageModule,
	AngularFireDatabaseModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
