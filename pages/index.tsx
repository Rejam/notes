import Link from "next/link";

export default function Home() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <main>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </main>
  );
}
