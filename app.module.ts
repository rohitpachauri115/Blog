import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Admin/home/home.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Admin/dashboard2/dashboard.component';
import { PostsComponent } from './Admin/dashboard2/posts/posts.component';
import { CommentsComponent } from './Admin/dashboard2/comments/comments.component';
import { PagesComponent } from './Admin/dashboard2/pages/pages.component';
import { SettingComponent } from './Admin/dashboard2/setting/setting.component';
import { PostsListsComponent } from './Admin/dashboard2/posts/post-lists/posts-lists.component';
import { PostsService } from './Admin/dashboard2/posts/post-lists/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    PagesComponent,
    SettingComponent,
    PostsListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
  ],
  providers: [PostsService],

  bootstrap: [AppComponent],
})
export class AppModule {}
