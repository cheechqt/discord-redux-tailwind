import HeaderNav from "./HeaderNav";
import HeaderText from "./HeaderText";
import HeaderImages from "./HeaderImages";

function Header() {
  return (
    <header className="bg-blue relative min-h-[626px] overflow-hidden w-full flex items-center md:items-start lg:items-center flex-col md:pb-20">
      <HeaderNav />
      <HeaderText />
      <HeaderImages />
    </header>
  );
}

export default Header;
