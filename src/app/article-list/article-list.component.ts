import { Component, OnInit, Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({ selector: '[popUpclass]'});

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  condition = true;
  showSad = true;
  status = 'ready';
  constructor() { }


  ngOnInit() {
  }

}
