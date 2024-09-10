import { cookies } from "next/headers";

export const defaultQuery = async (url: string) => {
  const token = cookies().get("token")?.value;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
