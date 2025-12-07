import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import DetailPostCard from "../components/DetailPostCard";
import CommentCard from "../components/CommentCard";
import usePostDetail from "../hooks/usePostDetail";
export default function PostDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = usePostDetail(Number(id));
  return (
    <div className="px-10 sm:px-20 py-10 text-slate-700 hover:text-slate-950 space-y-5">
      <Link to="/" className="flex items-center space-x-2 text-lg">
        <IoMdArrowBack /> <p>Back to Posts</p>
      </Link>
      {loading && <p>loading ...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && data && (
        <>
          <DetailPostCard post={data} />
          <div className="shadow-sm/20 border border-slate-100 px-15 py-10 space-y-1 rounded-lg">
            <p className="font-semibold text-lg">
              Comments ({data.comments.data.length})
            </p>
            <div className="">
              {data.comments.data.map((item, index) => (
                <CommentCard key={index} comments={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
