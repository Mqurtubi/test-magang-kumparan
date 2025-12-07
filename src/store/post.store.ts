import { create } from "zustand";
import type { Post } from "../types";
interface PostState {
  posts: Post[];
  createdPosts: Post[];
  setPosts: (list: Post[]) => void;
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}
export const usePostStore = create<PostState>((set) => ({
  posts: [],
  createdPosts: [],
  setPosts: (list) => set({ posts: list }),
  addPost: (post) =>
    set((state) => ({ createdPosts: [post, ...state.createdPosts] })),
  removePost: (id: string) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
      createdPosts: state.createdPosts.filter((p) => p.id !== id),
    })),
}));
