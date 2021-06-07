import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {Comment} from "../../../comment/models/comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post

  @Input()
  comment: Comment

  constructor() { }

  ngOnInit(): void {
  }

}
