import { Component, OnInit } from '@angular/core';
import {IPost, IPostResponse} from "../../Shared/Services/Interfaces/Blog/blog.interface";
import {BlogService} from "../../Shared/Services/Blog/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public userPosts!: IPostResponse[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.blogService.getAll().subscribe(data => {
      this.userPosts = data;
    })
  }

}
