import { useState, useEffect } from "react";
import type { PostDetailResponse } from "../types";
import { getDetailPost } from "../api/posts.api";
export default function usePostDetail(id: number) {
  const [data, setData] = useState<PostDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const post = await getDetailPost(id);
        setData(post);
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { data, loading, error };
}
