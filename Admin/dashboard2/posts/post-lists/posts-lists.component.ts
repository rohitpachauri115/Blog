import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './post.service';
import { post } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css'],
})
export class PostsListsComponent implements OnInit, OnDestroy {
  posts: post[] = [];
  private postSub: Subscription;
  // posts = [
  //   {
  //     title: 'Angular 14 Material',
  //     content: 'this is angular 14 material blog',
  //   },
  //   {
  //     title: 'Angular 14 Material',
  //     content: 'this is angular 14 material blog',
  //   },
  //   { title: ' Material project', content: 'this is angular 14 material blog' },
  //   {
  //     title: 'javascript project',
  //     content: 'this is angular 14 material blog',
  //   },
  // ];

  constructor(public psService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.psService.getAll();
    this.postSub = this.psService
      .getUpdateListerner()
      .subscribe((posts: post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
