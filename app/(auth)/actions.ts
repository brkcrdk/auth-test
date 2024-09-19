"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (e: FormData) => {
  const username = e.get("username");
  const password = e.get("password");

  console.log("loginAction", username, password);

  const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const response: { token: string; refreshToken: string } = await res.json();
  if (res.ok) {
    console.log({ loginResponse: response.token });
    cookies().set("token", response.token);
    cookies().set("refreshToken", response.refreshToken);
    redirect("/");
  } else {
    console.log("Login failed");
  }
};
