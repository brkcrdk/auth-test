"use server";

import query from "../query";

async function getCurrentUser() {
  return query("/auth/me");
}

export default getCurrentUser;
