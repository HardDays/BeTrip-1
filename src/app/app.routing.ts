import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { BestComponent } from './best/best.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TripsComponent } from './trips/trips.component';
import { RouteComponent } from './route/route.component';
import { ViewAfterBuildComponent } from './view-after-build/view-after-build.component';


const routes: Routes = [
    { path: '', redirectTo: 'build', pathMatch:'full'},
    { path: 'build',component: BuildComponent },
    { path: 'best',component: BestComponent },
    { path: 'download',component: DownloadComponent },
    { path: 'faq',component: FaqComponent },
    { path: 'functionality',component: FunctionalityComponent },
    { path: 'trips',component: TripsComponent },
    { path: 'routes',component: ViewAfterBuildComponent },
    { path: 'route/:id',component: RouteComponent }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
  providers: []
})
export class AppRoutingModule { }
