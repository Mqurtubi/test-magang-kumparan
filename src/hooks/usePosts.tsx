import { useEffect, useState } from "react";
import { getPosts } from "../api/posts.api";
import type { PostListResponse } from "../types";
import { usePostStore } from "../store/post.store";
export default function usePost(page: number) {
  const posts = usePostStore((s) => s.posts);
  const createdPosts = usePostStore((s) => s.createdPosts);
  const setPosts = usePostStore((s) => s.setPosts);
  const [links, setLinks] = useState<PostListResponse["links"]>({
    first: { page: 1, limit: 10 },
    last: { page: 1, limit: 10 },
    prev: null,
    next: null,
  });
  const [meta, setMeta] = useState<PostListResponse["meta"]>({
    totalCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPosts(page);
        setPosts(data.data);
        setLinks(data.links);
        setMeta(data.meta);
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, setPosts]);

  return {
    posts: [...createdPosts, ...posts],
    links,
    meta,
    loading,
    error,
  };
}
