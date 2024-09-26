import getCurrentUser from "@/services/auth/getCurrentUser";

async function Avatar() {
  const userData = await getCurrentUser();
  return <div>render user avatar {userData.image}</div>;
}
export default Avatar;
