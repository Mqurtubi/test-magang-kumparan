import type { User } from "./user.type";
import type { Comment } from "./comment.type";
import type { PaginationMeta, PaginationLinks } from "./pagination.type";
export interface Post {
  id: string;
  title: string;
  body: string;
  user?: User;
}

export interface PostListResponse {
  data: Post[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface PostDetailResponse {
  id: string;
  title: string;
  body: string;
  user?: User;
  comments: {
    data: Comment[];
  };
}

export interface CreatePostParams {
  title: string;
  body: string;
  userId?: string;
}
