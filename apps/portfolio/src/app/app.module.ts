import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from '@sellemond/portfolio/feature-hero';
import { IntroductionComponent } from '@sellemond/portfolio/feature-introduction';
import { ProjectsComponent } from '@sellemond/portfolio/feature-projects';
import { TechstackComponent } from '@sellemond/portfolio/feature-techstack';
import { UiFooterComponent } from '../../../../libs/shared/ui-components/src/lib/ui-footer/ui-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroComponent,
    IntroductionComponent,
    ProjectsComponent,
    TechstackComponent,
    UiFooterComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
