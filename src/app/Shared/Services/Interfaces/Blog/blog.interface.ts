export interface IPost {
  id: number;
  title: string;
  text: string;
  author: string;
}

export interface IPostRequest {
  title: string;
  text: string;
  author: string;
}

export interface IPostResponse extends IPostRequest {
  id: number;
}
