import { Component, OnInit } from '@angular/core';
import {Comment} from "../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  fullComment: Comment

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id);
      this.commentService.getComment(value.id).subscribe(value1 => {
      this.fullComment = value1
    })})
  }

  ngOnInit(): void {
  }

}
