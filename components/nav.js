import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex-row flex items-center justify-between mt-4 px-5 md:px-8 pb-5 border-b">
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline bg-clip-text hover:text-transparent bg-gradient-to-br from-teal to-gold-darkest">
            RG.
          </a>
        </Link>
      </h1>
      <nav>
        <ul className="flex">
          <li className="ml-5">
            <Link href="/#work">
              <a className="link text-2xl font-medium hover:underline bg-clip-text hover:text-transparent bg-gradient-to-br from-teal to-gold-darkest">
                Work
              </a>
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/about">
              <a className="link text-2xl font-medium hover:underline bg-clip-text hover:text-transparent bg-gradient-to-br from-teal to-gold-darkest">
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
