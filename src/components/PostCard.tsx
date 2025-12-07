import type { Post } from "../types";
import { Link } from "react-router-dom";
import { usePostStore } from "../store/post.store";
import { deletePost } from "../api/posts.api";
export default function Postcard({ post }: { post: Post }) {
  const removePost = usePostStore((s) => s.removePost);
  const handleDelete = async () => {
    const confirmDelete = confirm("delete this post?");
    if (!confirmDelete) return;

    try {
      await deletePost(Number(post.id));
      removePost(post.id);
      alert("post deleted successfully");
    } catch (error) {
      console.log(error);
      alert("failed to delete post");
    }
  };
  return (
    <div className="shadow-sm/20 px-6 py-5 rounded-xl hover:shadow-md/20">
      <Link to={`/posts/${post.id}`} className="space-y-4">
        <p className="text-xl font-semibold">{post.title}</p>
        <p className="text-lg">{(post.body ?? "").slice(0, 100)}...</p>
        <p className="text-slate-400">{post.user?.name ?? "unknown"}</p>
      </Link>
      <button
        className="rounded bg-red-500 text-white px-5 py-2 mt-4"
        onClick={handleDelete}
      >
        Delete post
      </button>
    </div>
  );
}
