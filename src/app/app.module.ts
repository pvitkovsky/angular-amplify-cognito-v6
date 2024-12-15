import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmplifyAuthenticatorModule} from '@aws-amplify/ui-angular';
import { HelloComponent } from './components/hello/hello.component';
import { AuthComponent } from './components/auth/auth.component';
import {BaseComponent} from './components/shared/BaseComponent';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HelloComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
