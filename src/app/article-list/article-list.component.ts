import { Component, OnInit, Directive } from '@angular/core';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

@Directive({ selector: '[appUnless]'})
export class ArticleListComponent implements OnInit {
  condition = true;
  constructor() { }


  ngOnInit() {
  }

}
