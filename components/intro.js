import { SITE_DESCRIPTION } from "../lib/constants";

export default function Intro() {
  return (
    <section className="px-5 md:px-8 my-12 py-12">
      <div className="max-w-2xl">
        <h3 className="text-7xl md:text-9xl tracking-tight font-black leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-teal via-gold to-gold-darkest">
          Hello!
        </h3>
        <h4 className="text-2xl md:text-4xl font-medium mt-5 tracking-tight">
          {SITE_DESCRIPTION}
        </h4>
      </div>
    </section>
  );
}
