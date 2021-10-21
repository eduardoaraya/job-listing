import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfessionalPageModule } from 'src/modules/professional/page/professional-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProfessionalPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
