"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface QueryParams {
  endpoint: string;
}

async function query({ endpoint }: QueryParams) {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      cookies().delete("refreshToken");
      redirect("/login");
    }

    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      cookies().delete("token");
      cookies().delete("refreshToken");
      redirect("/login");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default query;
