"use server";

import query from "../query";
import { revalidatePath } from "next/cache";

interface UserProps {
  id: 1;
  username: "emilys";
  email: "emily.johnson@x.dummyjson.com";
  firstName: "Emily";
  lastName: "Johnson";
  gender: "female";
  image: "https://dummyjson.com/icon/emilys/128";
}

async function getCurrentUser(): Promise<UserProps> {
  console.log("currentUser requesti atıldı");
  return query("/auth/me");
}

export default getCurrentUser;
