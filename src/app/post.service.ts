import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for (let post of POSTS) {
      if (post.id === postId) {
        return post;
      }
    }
  }
}
