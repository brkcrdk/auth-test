"use server";

import authTestConfig from "@/authTestConfig";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

async function query(endpoint: string, requestInit?: RequestInit) {
  const headerToken = headers().get(authTestConfig.accessToken);
  const cookieToken = cookies().get(authTestConfig.accessToken)?.value;

  const computedToken = cookieToken || headerToken;

  if (!computedToken) {
    redirect("/logout");
  }

  const computedRequestParams: RequestInit = {
    ...requestInit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${computedToken}`,
      ...requestInit?.headers,
    },
  };

  const response = await fetch(
    `${process.env.BASE_URL}${endpoint}`,
    computedRequestParams
  );

  if (response.status === 401) {
    redirect("/logout");
  }

  const data = await response.json();

  return data;
}

export default query;
