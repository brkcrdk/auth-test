import Link from "next/link";
import GetUser from "./GetUser";

export default function Home() {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/logout">Logout</Link>

      <GetUser />
    </div>
  );
}
