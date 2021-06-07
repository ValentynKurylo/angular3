import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommentService} from "./services/comment.service";
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
