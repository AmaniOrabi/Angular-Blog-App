export interface Blog {
  id: string;
  title: string;
  content: string;
  cover: string;
  likedByUser: boolean;
  likeCount: number;
  authorId: string;
  createdAt?: string;
}

export interface createBlog {
  title: string;
  content: string;
  cover?: string;
}
