import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import type { PostDetailResponse } from "../types";
export default function DetailPostCard({ post }: { post: PostDetailResponse }) {
  return (
    <div className="px-15 py-10 shadow-sm/20 border border-slate-100 rounded-lg">
      <div className="space-y-5 py-5 border-b border-slate-200">
        <p className="text-xl">{post.title}</p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-10 sm:space-y-0 text-slate-700">
          <div className="flex  items-center space-x-3">
            <FiUser />
            <p>{post.user!.name}</p>
          </div>
          <div className="flex items-center space-x-3">
            <MdOutlineMail />
            <p>{post.user!.email}</p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <p>{post.body}</p>
      </div>
    </div>
  );
}
