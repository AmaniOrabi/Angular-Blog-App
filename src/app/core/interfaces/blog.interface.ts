export interface Blog {
  id: string;
  title: string;
  content: string;
  cover: string;
  likedBy: number;
}

export interface createBlog {
  title: string;
  content: string;
  cover?: string;
}
