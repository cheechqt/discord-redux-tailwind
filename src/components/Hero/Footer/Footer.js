import BottomRow from "./BottomRow";
import RoutesSection from "./RoutesSection";
import TitleSection from "./TitleSection";
import { FooterSections } from "data";

function Footer() {
  return (
    <footer className="bg-[#23272A] pt-20 pb-16 px-10 flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1260px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 px-6 md:px-10">
        <TitleSection />
        {/* spacing div */}
        <div className="hidden md:col-span-1 md:row-end-[span_2] md:block"></div>
        {FooterSections.map((section) => {
          return <RoutesSection key={section.title} data={section} />;
        })}
      </div>
      <BottomRow />
    </footer>
  );
}

export default Footer;
