import leftImg from "./images/leftImg.svg";
import rightImg from "./images/rightImg.svg";
import cloudsImg from "./images/cloudsImg.svg";
function HeaderImages() {
  return (
    <div className="relative z-0 md:absolute md:top-0 md:left-0 md:h-full md:w-full">
      {/* left */}
      <img
        src={leftImg}
        alt="guys inside sneakers "
        className="block w-full max-w-[880px] relative z-10 -ml-20 md:hidden lg:absolute lg:bottom-0 lg:left-1/2 lg:block lg:h-auto lg:w-auto lg:max-w-auto lg:-ml-[1030px] lg:transform-none"
      />
      {/* clouds */}
      <img
        src={cloudsImg}
        alt="clouds background"
        className="hidden absolute left-1/2 top-0 md:block md:top-auto md:bottom-0 md:-ml-[1320px] "
      />
      {/* right */}
      <img
        src={rightImg}
        alt="gamers just chillin"
        className="hidden md:inline absolute bottom-0 left-1/2 ml-[-70px] lg:block lg:bottom-0 lg:left-1/2 lg:ml-[370px]"
      />
    </div>
  );
}

export default HeaderImages;
