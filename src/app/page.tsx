import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Planets</p>
      <Link href="/planets">přejít na planets</Link>
    </>
  );
}
