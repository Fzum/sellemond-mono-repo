import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from '@sellemond/portfolio/feature-hero';
import { IntroductionComponent } from '@sellemond/portfolio/feature-introduction';
import { ProjectsComponent } from '@sellemond/portfolio/feature-projects';
import {TechstackComponent} from "@sellemond/portfolio/feature-techstack";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroComponent,
    IntroductionComponent,
    ProjectsComponent,
    TechstackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
