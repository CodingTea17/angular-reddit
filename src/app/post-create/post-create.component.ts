import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  new(title: string, author: string, subReddit: string, url: string, subreddit: string, body: string, id: number){}

}
