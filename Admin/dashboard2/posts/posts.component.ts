import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './post-lists/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}
  onPostData(form: NgForm) {
    if (!form.invalid) {
      const value = form.value;
      this.postsService.addPost(value.title, value.content, value.dateTime);
      form.resetForm();
    } else {
      return;
    }
  }
}
