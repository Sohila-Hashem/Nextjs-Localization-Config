import { getLocalizationDict } from "@/config/i18n/get-localization";

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getLocalizationDict(lang);
  return (
    <div>
      <p>{dict.home.title}</p>
      <p>{dict.home.description}</p>
    </div>
  );
}
