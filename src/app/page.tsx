import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-16">
      <NavBar active={0} />
      <Intro />
    </div>
  );
}
