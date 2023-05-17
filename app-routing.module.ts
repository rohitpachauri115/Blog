import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Admin/home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/dashboard2/dashboard.component';
import { PostsComponent } from './Admin/dashboard2/posts/posts.component';
import { CommentsComponent } from './Admin/dashboard2/comments/comments.component';
import { PagesComponent } from './Admin/dashboard2/pages/pages.component';
import { SettingComponent } from './Admin/dashboard2/setting/setting.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'setting', component: SettingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
