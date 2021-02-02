import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between mt-8">
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">RG.</a>
        </Link>
      </h1>
      <nav>
        <ul className="flex mb-3">
          <li className="ml-5">
            <Link href="/">
              <a className="link text-xl font-medium hover:underline">Work</a>
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/">
              <a className="link text-xl font-medium hover:underline">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
