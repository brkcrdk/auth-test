import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function mutation(
  endpoint: string,
  requestParams: RequestInit
) {
  const token = cookies().get("token")?.value;
  const refreshToken = cookies().get("refreshToken")?.value;
  if (!token) {
    redirect("/logout");
  }
  const computedRequestParam: RequestInit = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      ...requestParams.headers,
    },
  };
  if (requestParams.body) {
    let data = JSON.stringify(requestParams.body);
    computedRequestParam.body = data;
  }
  const response = await fetch(
    `${process.env.BASE_URL}${endpoint}`,
    computedRequestParam
  );
  if (response.status === 401) {
    redirect("/logout");
  }
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}
