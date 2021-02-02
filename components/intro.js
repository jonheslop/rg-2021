import { SITE_DESCRIPTION } from "../lib/constants";

export default function Intro() {
  return (
    <section className="my-24">
      <div className="max-w-lg">
        <h3 class="text-4xl">Hello!</h3>
        <h4 className="text-center md:text-left text-2xl mt-5">
          {SITE_DESCRIPTION}
        </h4>
      </div>
    </section>
  );
}
