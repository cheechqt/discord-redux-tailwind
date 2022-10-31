function HeroSection({ image, title, text, index, isLastSection }) {
  return (
    <div
      className={`flex items-center justify-center 
      ${index % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"}
      `}
    >
      <div
        className={`w-full max-w-[1260px] flex items-center justify-center flex-col md:flex-row px-6 py-14 ${
          isLastSection && "md:flex-col text-center"
        }`}
      >
        <div
          className={`opacity-100 translate-y-0 transition-opacity duration-500 delay-100 w-full box-border basis-auto 
          ${index % 2 === 0 ? "order-0" : "order-1"}
          ${isLastSection && "flex items-center justify-center"}
          `}
        >
          <img
            className="w-full object-cover mt-6 max-w-[678px] max-h-[440px] md:my-auto"
            src={image}
            alt=""
          />
        </div>
        <div className="text-[#23272a] flex flex-col flex-shrink basis-3/4 justify-center mt-5 md:mt-0">
          <h2
            className={`font-bold text-[32px] leading-tight md:text-5xl ${
              isLastSection ? "font-title" : "font-default_bold"
            }`}
          >
            {title}
          </h2>
          <div className="mt-6 text-[20px] leading-relaxed">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
