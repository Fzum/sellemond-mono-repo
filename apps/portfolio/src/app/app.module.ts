import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from '@sellemond/portfolio/feature-hero';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
