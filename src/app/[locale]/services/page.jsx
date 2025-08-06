import servicesData from "@/public/data/services.json";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page({ params }) {
  const t = useTranslations("Services");
  const services = Object.keys(servicesData);

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <ul>
        {services.map((service) => {
          return (
            <li key={service}>
              <Link href={`/services/${service}`}>
                {t(servicesData[service]?.title)}
              </Link>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
