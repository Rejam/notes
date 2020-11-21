import { useState } from "react";
import Link from "next/link";

import { publicFetch } from "../utilities";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await publicFetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    console.log({ res });
  };

  return (
    <main>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </label>
        <button type="submit">Signup</button>
      </form>
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  );
}
