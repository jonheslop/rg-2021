import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-12 bg-gradient-to-br from-teal to-gold-darkest">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Rebecca Goss, <span className="font-normal">UX Design</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:rebecca@hey.com"
              className="bg-black hover:bg-white text-white hover:text-black font-black py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 text-lg"
            >
              Email me
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
