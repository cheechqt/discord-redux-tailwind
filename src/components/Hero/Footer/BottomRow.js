import BaseButton from "base/Button";
import logo from "./images/logo.png";

function BottomRow() {
  return (
    <div className="text-white w-full">
      <div className="mb-8 h-[1px] bg-purple" />
      <div className="flex items-center justify-between">
        <img className="w-[140px]" alt="logo" src={logo} />
        <BaseButton classes="bg-purple text-white hover:bg-blurple !w-[76px] !px-[9px] !py-[7px] !text-[15px]">
          Sign up
        </BaseButton>
      </div>
    </div>
  );
}

export default BottomRow;
