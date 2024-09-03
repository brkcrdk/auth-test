"use server";

export const loginAction = async (e: FormData) => {
  const email = e.get("email");
  const password = e.get("password");

  console.log("loginAction", email, password);
};
