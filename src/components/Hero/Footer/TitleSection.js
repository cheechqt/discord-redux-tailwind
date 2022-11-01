/* eslint-disable */
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import flagIcon from "./images/flag.png";
import twiLogo from "./images/twitter.svg";
import fbLogo from "./images/facebook.svg";
import instLogo from "./images/instagram.svg";
import ytLogo from "./images/youtube.svg";

function TitleSection() {
  return (
    <div className="mb-14 col-span-4 md:col-span-3 row-end-[span_3] flex flex-col grow mb-14">
      <h4 className="text-purple font-title text-5xl">IMAGINE A PLACE</h4>
      <div className="mt-6 flex items-center">
        <div className="relative flex items-center cursor-pointer">
          <div className="flex items-center gap-x-3">
            <img className="w-7" src={flagIcon} alt="flag" />
            <p className="text-base text-white">English, USA</p>
          </div>
          <ChevronDownIcon className="w-6 text-white pl-2" />
        </div>
      </div>
      <div className="mt-6">
        <ul className="flex gap-x-7">
          <li className="cursor-pointer">
            <a>
              <img className="w-7" src={twiLogo} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <img className="w-7" src={instLogo} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <img className="w-7" src={fbLogo} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <img className="w-7" src={ytLogo} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleSection;
