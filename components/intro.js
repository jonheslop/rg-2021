import { SITE_DESCRIPTION } from "../lib/constants";

export default function Intro() {
  return (
    <section className="my-24">
      <div className="max-w-2xl">
        <h3 class="text-4xl md:text-8xl tracking-tight font-black leading-tight mb-8">
          Hello!
        </h3>
        <h4 className="text-center md:text-left text-4xl font-medium mt-5">
          {SITE_DESCRIPTION}
        </h4>
      </div>
    </section>
  );
}
