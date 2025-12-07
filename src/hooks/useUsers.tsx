import { useEffect, useState } from "react";
import { getUsers } from "../api/posts.api";
import type { User } from "../types";
export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { users, loading };
}
