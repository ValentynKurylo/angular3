import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClint: HttpClient) { }
  getComments():Observable<Comment[]>{
    return this.httpClint.get<Comment[]>(this.url)
  }
  getComment(id: number):Observable<Comment>{
    return this.httpClint.get<Comment>(this.url + '/' + id)
  }
}
