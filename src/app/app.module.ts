import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FourClassifyComponent } from './four-classify/four-classify.component';
import { CountForComponent } from './count-for/count-for.component';
import { TravelMeaningComponent } from './travel-meaning/travel-meaning.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { CountBottomComponent } from './count-bottom/count-bottom.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'article-list',
    component: ArticleListComponent,
    data: { title: '推荐内容' }
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
