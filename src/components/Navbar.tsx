import clsx from "clsx";

export function Navbar() {
  return (
    <nav className="h-[64px] border-b border-gray-700">
      <div
        className={clsx(
          "container h-full",
          "flex items-center justify-between"
        )}
      >
        <div>Navbar</div>

        <ul className="flex items-center gap-4">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </nav>
  );
}
