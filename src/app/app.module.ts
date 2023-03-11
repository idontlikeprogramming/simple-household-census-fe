import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsModule } from './materials/materials.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
