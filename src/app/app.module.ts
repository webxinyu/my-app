import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UnlessDirective } from "./unless.directive";

import { AppComponent } from './app.component';
import { FourClassifyComponent } from './four-classify/four-classify.component';
import { CountForComponent } from './count-for/count-for.component';
import { TravelMeaningComponent } from './travel-meaning/travel-meaning.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { CountBottomComponent } from './count-bottom/count-bottom.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { routing } from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    FourClassifyComponent,
    CountForComponent,
    TravelMeaningComponent,
    FooterContentComponent,
    CountBottomComponent,
    NavigationBarComponent,
    ArticleListComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutUsComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
