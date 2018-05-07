

import {ArticleListComponent} from "./article-list/article-list.component";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us/about-us.component";

const appRoutes:Routes = [
  { path:'article-list',component:ArticleListComponent },
  { path:'',component:HomeComponent },
  { path:'about-us',component:AboutUsComponent },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
