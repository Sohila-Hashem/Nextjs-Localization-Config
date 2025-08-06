import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import servicesData from "@/data/services.json";

export function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({ service }));
}

// Main page component
export default function ServicePage({ params }) {
  const t = useTranslations("Services");
  const serviceData = servicesData[params.service];

  // Handle invalid route
  if (!serviceData) {
    notFound();
  }

  return (
    <div>
      <h1>{t(serviceData.title)}</h1>
      <p>{t(serviceData.description)}</p>
    </div>
  );
}
