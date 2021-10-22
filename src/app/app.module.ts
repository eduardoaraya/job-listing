import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from 'src/modules/http/http.module';
import { ProfessionalPageModule } from 'src/modules/professional/page/professional-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ProfessionalPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
