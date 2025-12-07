import { api } from "./client";
import { GET_POSTS_QUERY } from "../graphql/posts/getPosts.gql";
import { GET_DETAIL_POST } from "../graphql/posts/getDetailPost.gql";
import { MUTATION_CREATE_POST } from "../graphql/posts/createPost.gql";
import { GET_USERS } from "../graphql/posts/getUsers.gql";
import type { CreatePostParams } from "../types";
import { DELETE_POST } from "../graphql/posts/deletePost.gql";

const getPosts = async (page = 1, limit = 10) => {
  const posts = await api.post("", {
    query: GET_POSTS_QUERY,
    variables: { page, limit },
  });
  return posts.data.data.posts;
};

const getDetailPost = async (id: number) => {
  const post = await api.post("", {
    query: GET_DETAIL_POST,
    variables: { id },
  });
  return post.data.data.post;
};

const createPost = async (form: CreatePostParams) => {
  const post = await api.post("", {
    query: MUTATION_CREATE_POST,
    variables: { title: form.title, body: form.body },
  });
  const newPost = post.data.data.createPost;

  return {
    id: newPost.id,
    title: newPost.title,
    body: newPost.body,
    user: {
      id: form.userId || "0",
      name: `User ${form.userId}`,
      email: `user${form.userId}@example.com`,
    },
  };
};

const deletePost = async (id: number) => {
  const post = await api.post("", {
    query: DELETE_POST,
    variables: { id },
  });
  return post.data.data.deletePost;
};

const getUsers = async () => {
  const users = await api.post("", {
    query: GET_USERS,
  });
  return users.data.data.users.data;
};

export { getPosts, getDetailPost, createPost, getUsers, deletePost };
