import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { BestComponent } from './best/best.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TripsComponent } from './trips/trips.component';
import { ViewAfterBuildComponent } from './view-after-build/view-after-build.component';
import { AgmCoreModule } from '@agm/core';
import { MainService } from './core/services/main.service';
import { HttpService } from './core/services/http.service';
import { FooterComponent } from './footer/footer.component';
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
  "google": {
    "clientId": "285182475617-gom13u0bp7ik48v4lc9ngg5s3rijbjav.apps.googleusercontent.com"
  },
  "twitter": {
    "clientId": "vgA7wO4FemlddNtZBFsU8R1zj"
  },
  "facebook": {
    "clientId": "1604317082925030",
    "apiVersion": "<version>" //like v2.4 
  }
};
@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    BestComponent,
    DownloadComponent,
    FaqComponent,
    FunctionalityComponent,
    TripsComponent,
    ViewAfterBuildComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaq3qTokKJ_b2VP0h5h_eeYliQ80ME74M',
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    Angular2SocialLoginModule
  ],
  providers: [MainService, HttpModule, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }