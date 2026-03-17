"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Console from "./components/Console";

export default function HomePage() {
  const [section, setSection] = useState("home");

  return (
    <>
      <Navbar setSection={setSection} />
      <Console section={section} />
    </>
  );
}