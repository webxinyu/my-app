

import {ArticleListComponent} from "./article-list/article-list.component";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes:Routes = [
  { path:'article-list',component:ArticleListComponent },
  { path:'',component:HomeComponent },
  { path:'about-us',component:AboutUsComponent },
  { path:'**',component:PageNotFoundComponent },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
