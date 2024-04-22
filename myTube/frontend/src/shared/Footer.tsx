import { Mail } from "../icons/Mail";
import { Whatsapp } from "./Whatsapp";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow p-2 w-full flex items-center justify-between px-7 flex-row md:px-20 lg:px-44">
      <div className="max-w-screen-xl md:p-4 md:flex md:items-center md:justify-between text-center text-pretty">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="https://adrianrocafull.es/" className="hover:underline">
            Adrian Rocafull
          </a>
          . <br /> All Rights Reserved.
        </span>
      </div>
      <div className="grid grid-cols-3 md:flex md:items-center md:justify-center gap-5 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <a
          href="https://wa.me/34722561809"
          target="_blank"
          className="hover:underline"
        >
          <Whatsapp classes="h-6"></Whatsapp>
        </a>
        <a
          href="mailto:adrianrocafull1@gmail.com"
          target="_blank"
          className="hover:underline"
        >
          <Mail></Mail>
        </a>
      </div>
    </footer>
  );
};
