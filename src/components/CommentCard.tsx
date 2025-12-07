import type { Comment } from "../types/comment.type";
export default function CommentCard({ comments }: { comments: Comment }) {
  return (
    <div className="border-b border-slate-300 py-6 last:border-none space-y-3">
      <div className="space-y-1">
        <p className="font-semibold">{comments.name}</p>
        <p className="text-slate-500">{comments.email}</p>
      </div>
      <div>
        <p>{comments.body}</p>
      </div>
    </div>
  );
}
