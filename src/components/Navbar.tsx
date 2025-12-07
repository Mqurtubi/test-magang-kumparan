import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex justify-between px-10 py-2 border-b border-slate-200 text-lg items-center sm:px-20">
      <div>
        <Link to="/">Post</Link>
      </div>
      <div>
        <Link
          to="/posts/create"
          className="flex items-center bg-black text-white px-3 py-2 rounded-xl"
        >
          <IoCreateOutline />
          New Post
        </Link>
      </div>
    </div>
  );
}
