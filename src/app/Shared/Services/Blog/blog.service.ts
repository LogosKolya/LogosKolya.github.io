import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {IPost, IPostRequest, IPostResponse} from "../Interfaces/Blog/blog.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = environment.BACKEND_URL;
  private api = { posts: `${this.url}posts` }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getAll(): Observable<IPostResponse[]> {
    return this.http.get<IPostResponse[]>(this.api.posts);
  }

  create(post: IPostRequest): Observable<IPostResponse> {
    return this.http.post<IPostResponse>(this.api.posts, post);
  }

  update(discount: IPostRequest, id: number): Observable<IPostResponse> {
    return this.http.patch<IPostResponse>(`${this.api.posts}/${id}`, discount);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.posts}/${id}`);
  }
}
