import HeroSection from "./HeroSection";
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
    </>
  );
}

export default Hero;
