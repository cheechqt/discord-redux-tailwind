/* eslint-disable */
import { Bars3Icon } from "@heroicons/react/24/solid";
import BaseButton from "base/Button";

function HeaderNav() {
  return (
    <div className="w-full max-w-[1180px] flex items-center justify-between py-4 px-6 md:px-10">
      <a href="#">
        <img
          src="https://rb.gy/it5msp"
          alt="logo"
          className="w-32 h-12 object-contain"
        />
      </a>
      <div className="hidden lg:flex space-x-6">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4 items-center">
        <BaseButton classes="bg-white !w-auto !text-sm !px-5 !py-2 text-black hover:text-blurple">
          Login
        </BaseButton>
        <Bars3Icon className="h-11 text-white cursor-pointer lg:hidden" />
      </div>
    </div>
  );
}

export default HeaderNav;
