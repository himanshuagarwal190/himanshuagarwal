'use client'

import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import { INavItems } from "./types";
import { useState } from "react";

const navItems: INavItems = [
  {
      name: "Home",
      leftPosition: "0px",
      jumpTo: "#",
      width: "110px"
  },
  {
      name: "Experience",
      leftPosition: "95px",
      jumpTo: "#experience",
      width: "130px"
  },
  {
      name: "Education",
      leftPosition: "220px",
      jumpTo: "#experience",
      width: "120px"
  },
  {
      name: "Personal Projects",
      leftPosition: "340px",
      jumpTo: "#experience",
      width: "170px"
  },
  {
      name: "Achievements",
      leftPosition: "504px",
      jumpTo: "#experience",
      width: "160px"
  },
]

export default function Home() {
  const [selectedNav, setSelectedNav] = useState(0)

  return (
    <div className="mx-16 mb-36">
      <NavBar navItems={navItems} setSelectedNav={setSelectedNav} selectedNav={selectedNav} />
      <Intro />
      <Experience />
    </div>
  );
}
