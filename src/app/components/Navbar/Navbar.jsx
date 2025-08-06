"use client";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div>
      <h1>Fusion Group Global</h1>
      <ul>
        {routing.locales.map((locale, index) => (
          <li key={index}>
            <Link href={`/${pathname}`} locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link href="/">{t("HomePage.title")}</Link>
        </li>
        <li>
          <Link href="/about">{t("About.title")}</Link>
        </li>
        <li>
          <Link href="/services">{t("Services.title")}</Link>
        </li>
        <li>
          <Link href="/books">{t("BooksPage.title")}</Link>
        </li>
      </ul>
    </div>
  );
}
