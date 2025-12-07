import { useState } from "react";
import { createPost } from "../api/posts.api";
import { usePostStore } from "../store/post.store";
import useUsers from "../hooks/useUsers";
import { createPostSchema } from "../validations/FormCreatePost.validation";
import { useNavigate } from "react-router-dom";

export default function FormCreatePost() {
  const addPost = usePostStore((s) => s.addPost);
  const [form, setForm] = useState({
    title: "",
    body: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const { users, loading: loadingUsers } = useUsers();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const validateForm = createPostSchema.safeParse(form);
    if (!validateForm.success) {
      setSuccess("");
      setError(validateForm.error.issues[0].message);
      setLoading(false);
      return;
    }
    try {
      const post = await createPost(form);
      addPost(post);
      setSuccess("post created successfully");
      setError("");
      setForm({ title: "", body: "", userId: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col space-y-4 py-5" onSubmit={handleSubmit}>
      {error && (
        <p className="border border-red-500 text-red-500 rounded text-center">
          {error}
        </p>
      )}
      {success && (
        <p className="border border-green-500 text-green-500 rounded text-center">
          {success}
        </p>
      )}
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Post Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border border-slate-300 rounded  px-5 py-2"
          placeholder="Enter your post title"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Post Content</label>
        <textarea
          name="body"
          value={form.body}
          onChange={handleChange}
          className="border border-slate-300 rounded  px-5 py-2 h-36"
          placeholder="Write your post content here."
        ></textarea>
      </div>
      <div className="flex flex-col space-y-2">
        <label>User ID</label>
        {loadingUsers ? (
          ""
        ) : (
          <select
            name="userId"
            value={form.userId}
            onChange={handleChange}
            className="border border-slate-300 rounded  px-5 py-2"
          >
            <option value="">Select user</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="space-x-5">
        <button
          type="submit"
          className="rounded bg-black text-white px-5 py-2"
          disabled={loading}
        >
          {loading ? "loading..." : "Publish Post"}
        </button>
        <button
          className="rounded border border-slate-300 px-5 py-2"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
