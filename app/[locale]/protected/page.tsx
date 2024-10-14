import Link from "next/link";
import { Suspense } from "react";
import Avatar from "./Avatar";
import GetUser from "./GetUser";

function ProtectedRoute() {
  return (
    <>
      <h1 className="text-white text-4xl">Protected route</h1>
      <Link href="/test-route" className="text-white text-4xl">
        Go to test
      </Link>

      <GetUser />

      <Suspense fallback="Avatar is loading">
        <Avatar />
      </Suspense>
      <Suspense fallback="Avatar 2 is loading">
        <Avatar />
      </Suspense>
    </>
  );
}

export default ProtectedRoute;
