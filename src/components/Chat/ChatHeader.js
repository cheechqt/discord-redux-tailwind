import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  HashtagIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Header({ channelName }) {
  return (
    <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
      <div className="flex items-center space-x-1">
        <HashtagIcon className="h-6 text-[#72767d]" />
        <h4 className="text-white font-semibold">{channelName}</h4>
      </div>
      <div className="flex space-x-3">
        <BellIcon className="icon" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <UsersIcon className="icon" />
        <div className="flex bg-[#202225] text-xs p-1 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#202225] focus:outline-none text-white pl-1 placeholder-[#72767d]"
          />
          <MagnifyingGlassIcon className="h-4 text-[#72767d] mr-1" />
        </div>
        <InboxIcon className="icon" />
        <QuestionMarkCircleIcon className="icon" />
      </div>
    </header>
  );
}

export default Header;
