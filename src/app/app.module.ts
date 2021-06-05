import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
let routers=[
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:()=>import('./moduls/user/user.module').then(m=>m.UserModule)},
  {path: 'posts', loadChildren:()=>import('./moduls/posts/posts.module').then(p=>p.PostsModule)},
  {path: 'comments', loadChildren:()=>import('./moduls/comment/comment.module').then(c=>c.CommentModule)}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routers)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
