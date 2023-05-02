import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <h1 className="text-6xl font-bold text-center">
        Welcome to{" "}
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://nextjs.org"
          target="_blank"
        >
          Next.js!
        </a>
      </h1>
    </main>
  );
}
