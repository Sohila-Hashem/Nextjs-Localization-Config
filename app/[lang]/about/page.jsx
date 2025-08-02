"use client";
import { useState } from "react";

export default function Page({ params }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <p>About</p>
      {isVisible && <p>{dict.about.description}</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
    </div>
  );
}
