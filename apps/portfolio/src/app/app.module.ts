import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from '@sellemond/portfolio/feature-hero';
import { IntroductionComponent } from '@sellemond/portfolio/feature-introduction';
import { ProjectsComponent } from '@sellemond/portfolio/feature-projects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroComponent,
    IntroductionComponent,
    ProjectsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
