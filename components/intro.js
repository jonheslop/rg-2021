import { SITE_DESCRIPTION } from "../lib/constants";

export default function Intro() {
  return (
    <section className="px-5 md:px-8 my-12 py-12 bg-gradient-to-br from-teal to-green">
      <div className="max-w-2xl">
        <h3 className="text-4xl md:text-8xl tracking-tight font-black leading-tight mb-8">
          Hello!
        </h3>
        <h4 className="text-2xl md:text-4xl font-medium mt-5 tracking-tight">
          {SITE_DESCRIPTION}
        </h4>
      </div>
    </section>
  );
}
