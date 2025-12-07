import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostPage from "../pages/PostsPage";
import PostDetailPage from "../pages/PostDetailPage";
import CreatePostPage from "../pages/CreatePostPage";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
