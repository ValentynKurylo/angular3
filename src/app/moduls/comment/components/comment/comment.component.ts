import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/comment";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment

  constructor() { }

  ngOnInit(): void {
  }

}
