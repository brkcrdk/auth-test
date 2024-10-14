"use client";
import { useTransition } from "react";

import { getCurrentUserMutation } from "@/services/auth/getCurrentUserMutation";

function GetUser() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      className="bg-orange-400 disabled:opacity-50"
      onClick={() => {
        startTransition(async () => {
          await getCurrentUserMutation();
        });
      }}>
      GetUser is here
    </button>
  );
}
export default GetUser;
