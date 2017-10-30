import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [PostService]
})
export class PostCreateComponent implements OnInit {

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
  }

  new(title: string, author: string, subReddit: string, url: string, body: string) {
    this.postService.addPost(title, author, subReddit, url, body);
  }

}
