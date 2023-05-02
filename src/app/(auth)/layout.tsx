export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}
