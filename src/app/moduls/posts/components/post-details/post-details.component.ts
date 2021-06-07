import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  fullPost: Post

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
   this.activatedRoute.params.subscribe(value => {
   this.postService.getPost(value.id).subscribe(value1 => {
     this.fullPost = value1;})
   })

  }

  ngOnInit(): void {
  }

}
