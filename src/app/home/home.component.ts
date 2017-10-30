import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

}
