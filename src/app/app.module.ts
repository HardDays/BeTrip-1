import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    BestComponent,
    DownloadComponent,
    FaqComponent,
    FunctionalityComponent,
    TripsComponent,
    ViewAfterBuildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
