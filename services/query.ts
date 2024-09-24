"use server";

import authTestConfig from "@/authTestConfig";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function query(endpoint: string) {
  const token = cookies().get(authTestConfig.accessToken)?.value;

  if (!token) {
    redirect("/logout");
  }

  const response = await fetch(`${process.env.BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    redirect("/logout");
  }

  const data = await response.json();

  return data;
}

export default query;
