"use server";

import authTestConfig from "@/authTestConfig";
import mutation from "@/services/mutation";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (e: FormData) => {
  const username = e.get("username");
  const password = e.get("password");

  console.log("loginAction", username, password);

  const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const response: { accessToken: string; refreshToken: string } =
    await res.json();
  if (res.ok) {
    console.log({ loginResponse: response.accessToken });
    cookies().set(authTestConfig.accessToken, response.accessToken);
    cookies().set(authTestConfig.refreshToken, response.refreshToken);
    redirect("/");
  } else {
    console.log("Login failed");
  }
};
