import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormCreatePost from "../FormCreatePost";
import { vi } from "vitest";

vi.mock("../../hooks/useUsers", () => ({
  default: () => ({
    users: [{ id: "1", name: "Test User", email: "test@mail.com" }],
    loading: false,
  }),
}));

test("test menampilkan input title, body, dan select user ", () => {
  render(
    <MemoryRouter>
      <FormCreatePost />
    </MemoryRouter>
  );
  expect(
    screen.getByPlaceholderText("Enter your post title")
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText("Write your post content here.")
  ).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});
