import Link from "next/link";

export default function Home() {
  return (
    <main className="container py-4">
      <h1 className="text-6xl font-bold mb-4">Home</h1>

      <div>
        Go to <Link href="/login">login</Link>
      </div>
    </main>
  );
}
