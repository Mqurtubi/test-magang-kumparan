import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import FormCreatePost from "../components/FormCreatePost";
export default function CreatePostPage() {
  return (
    <div className="px-10 sm:px-20 py-10 text-slate-700 hover:text-slate-950 space-y-5">
      <Link to="/" className="flex items-center space-x-2 text-lg">
        <IoMdArrowBack /> <p>Back to Posts</p>
      </Link>
      <div className="shadow-sm/20 border border-slate-100 px-15 py-10 space-y-1 rounded-lg">
        <p className="font-semibold text-lg">Create new post</p>
        <FormCreatePost />
      </div>
    </div>
  );
}
