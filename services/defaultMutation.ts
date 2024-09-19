"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function mutation(endpoint: string, requestParams: RequestInit) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/logout");
  }

  const computedRequestParams: RequestInit = {
    method: requestParams.method || "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      ...requestParams.headers,
    },
  };

  if (requestParams.body) {
    const data = JSON.stringify(requestParams.body);
    computedRequestParams.body = data;
  }

  const response = await fetch(
    `${process.env.BASE_URL}${endpoint}`,
    computedRequestParams
  );

  if (response.status === 401) {
    redirect("/logout");
  }

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}
