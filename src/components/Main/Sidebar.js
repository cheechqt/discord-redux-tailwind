import { PlusIcon } from "@heroicons/react/24/solid";
import logoImg from "./images/logo.png";
import ServerIcon from "./ServerIcon";

function Sidebar() {
  return (
    <div className="flex flex-col space-y-3  bg-[#202225] p-3 min-w-max">
      <div className="server-default hover:bg-blurple">
        <img src={logoImg} alt="logo" className="h-7" />
      </div>
      <hr className="border-gray-700 w-8 border mx-auto" />
      <ServerIcon image="https://picsum.photos/200" />
      <ServerIcon image="https://picsum.photos/100" />
      <ServerIcon image="https://picsum.photos/300" />
      <ServerIcon image="https://picsum.photos/400" />
      <div className="server-default hover:bg-green group">
        <PlusIcon className="text-green h-7 group-hover:text-white"/>
      </div>
    </div>
  );
}

export default Sidebar;
