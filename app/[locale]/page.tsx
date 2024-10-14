import { useTranslations } from "next-intl";

// import Link from "next/link";
import GetUser from "./GetUser";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/logout">{t("title")}</Link>

      <GetUser />
    </div>
  );
}
