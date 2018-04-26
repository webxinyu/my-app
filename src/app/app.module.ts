import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FourClassifyComponent } from './four-classify/four-classify.component';
import { CountForComponent } from './count-for/count-for.component';
import { TravelMeaningComponent } from './travel-meaning/travel-meaning.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { CountBottomComponent } from './count-bottom/count-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    FourClassifyComponent,
    CountForComponent,
    TravelMeaningComponent,
    FooterContentComponent,
    CountBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
