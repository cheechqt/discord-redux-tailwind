/* eslint-disable */
import { Bars3Icon } from "@heroicons/react/24/solid";

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
      <div className="flex space-x-4">
        <button className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-blurple transition duration-200 ease-in-out whitespace-nowrap font-medium">
          Login
        </button>
        <Bars3Icon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </div>
  );
}

export default HeaderNav;
