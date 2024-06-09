import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>planets app</p>
      <Link href="/planets">go to planets</Link>
    </>
  );
}
