import image from "./images/section-1.svg";
function HeroSection({ title, text }) {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="opacity-100 translate-y-0 py-14 transition-opacity duration-500 delay-100 w-full max-width-[1260px] box-border grid grid-cols-12 gap-x-5 px-10">
        <img
          className="grid col-span-4 w-full object-cover mt-6 max-w-[678px] max-h-[440px] md:col-span-4 md:my-auto lg:col-span-7 order-1"
          src={image}
          alt=""
        />
      </div>
      <div className="text-[#23272a] grid col-span-4 md:flex md:flex-col md:justify-center mt-6 md:mt-0 md:col-span-4 lg:col-start-9 order-2">
        <h2 className="font-bold  font-title text-2xl leading-tight md:text-5xl">
          {title}
        </h2>
        <div className="mt-6 text-base leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

export default HeroSection;
