import { useState } from "react";
import Postcard from "../components/PostCard";
import Pagination from "../components/Pagination";
import SkeletonPostCard from "../components/SkeletonPostCard";
import usePost from "../hooks/usePosts";

export default function PostPage() {
  const [page, setpage] = useState(1);
  const { posts, links, loading, error } = usePost(page);
  const limit = links.first.limit;
  return (
    <div className="px-10 py-10 space-y-5 sm:px-20">
      <p className="text-lg">Posts</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {loading &&
          Array.from({ length: limit }).map((_, index) => (
            <SkeletonPostCard key={index} />
          ))}
        {!loading && error && <p>{error}</p>}
        {!loading &&
          posts &&
          posts.map((item, index) => <Postcard post={item} key={index} />)}
      </div>
      <Pagination
        onClickPage={(p: number) => setpage(p)}
        links={links}
        loading={loading}
      />
    </div>
  );
}
