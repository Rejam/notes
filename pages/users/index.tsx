import { useEffect, useState } from "react";
import Link from "next/link";

import { publicFetch } from "../../utilities";

export default function Signup() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await publicFetch("/api/users");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  );
}
