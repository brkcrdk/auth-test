import Link from "next/link";
import { Suspense } from "react";
import Avatar from "./Avatar";

function TestRoute() {
  return (
    <>
      <h1 className="text-white text-4xl">TestRoute route</h1>
      <Link href="/protected" className="text-white text-4xl">
        Go to Protected
      </Link>

      <Suspense fallback="Avatar is loading">
        <Avatar />
      </Suspense>
      <Suspense fallback="Avatar 2 is loading">
        <Avatar />
      </Suspense>
    </>
  );
}

export default TestRoute;
