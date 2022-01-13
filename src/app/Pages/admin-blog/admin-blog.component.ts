import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../Shared/Services/Blog/blog.service";
import {IPost, IPostResponse} from "../../Shared/Services/Interfaces/Blog/blog.interface";


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  public adminPosts!: IPostResponse[];
  public title: string = '';
  public text: string = '';
  public author: string = '';

  public status: boolean = true;

  public editID!: number;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.blogService.getAll().subscribe(data => {
      this.adminPosts = data;
    })
  }

  addPost(): void {
    if (this.title == '' || this.text == '' || this.author == '') {
      alert('Одне із полів є пустим!')
    }
    else {
      const newPost = {
        title: this.title,
        text: this.text,
        author: this.author,
      };
      this.blogService.create(newPost).subscribe(() => {
        this.getPost();
        this.resetForm();
      })
    }
  }

  deletePost(post: IPostResponse): void {
    if(confirm('Are you sure?')){
      this.blogService.delete(post.id).subscribe(() => {
        this.getPost();
      })
    }
  }

  editPost(): void {
    if (this.title == '' || this.text == '' || this.author == '') {
      alert('Одне із полів є пустим!')
    }
    else {
      const updatePost = {
        title: this.title,
        text: this.text,
        author: this.author,
      };
      this.blogService.update(updatePost, this.editID).subscribe(() => {
        this.getPost();
        this.resetForm();
        this.status = true;
      })
    }
  }

  showEdit(post: IPostResponse): void {
    this.title = post.title;
    this.text = post.text;
    this.author = post.author;
    this.editID = post.id;
    this.status = false;
  }

  resetForm(): void {
    this.title = '';
    this.text = '';
    this.author = '';
  }
}
