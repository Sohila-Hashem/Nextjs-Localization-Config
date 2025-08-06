"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Page() {
  const t = useTranslations("About");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>{t("title")}</h1>
      {isVisible && <p>{t("description")}</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
    </div>
  );
}
