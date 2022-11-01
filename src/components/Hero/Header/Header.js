import HeaderNav from "./HeaderNav";
import HeaderContent from "./HeaderContent";
import HeaderImages from "./HeaderImages";

function Header() {
  return (
    <header className="bg-blue relative min-h-[626px] overflow-hidden w-full flex items-center md:items-start lg:items-center flex-col md:pb-20">
      <HeaderNav />
      <HeaderContent />
      <HeaderImages />
    </header>
  );
}

export default Header;
