import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="meals">Home</Link>
      <Link href="community">Community</Link>
      <Link href="meals/1">Meals number 1</Link>
    </div>
  );
}
