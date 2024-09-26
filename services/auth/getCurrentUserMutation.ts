"use server";

import mutation from "../mutation";

export async function getCurrentUserMutation() {
  const resp = await mutation("/auth/me", {
    method: "GET",
    headers: {
      "demo-header-id": "123",
    },
  });
  console.log(resp);
  return resp;
}
