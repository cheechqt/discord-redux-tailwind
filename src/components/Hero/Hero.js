import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import HeroSection from "./HeroSection";
import BaseButton from "base/Button";
import { HeroSections } from "data";

function Hero() {
  return (
    <>
      {HeroSections.map(({ text, title, image }, index) => {
        return (
          <HeroSection
            key={index}
            text={text}
            title={title}
            image={image}
            index={index}
            isLastSection={index === HeroSections.length - 1}
          />
        );
      })}
      <div className=" bg-[#f6f6f6] px-6 mb-14 flex flex-col items-center justify-center">
        <div></div>
        <h4 className="mt-8 font-bold font-default_bold text-[32px] leading-tight">
          Ready to start your journey?
        </h4>
        <BaseButton classes="mt-10 bg-purple !w-full md:!w-[252px] text-white hover:bg-blurple !text-2xl">
          <ArrowDownTrayIcon className="w-7 mr-3" />
          Download for Mac
        </BaseButton>
      </div>
    </>
  );
}

export default Hero;
