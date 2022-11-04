import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import { setDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "firebase.js";
import Channel from "./Channel";
import UserRow from "./UserRow";

function ChannelsSection() {
  const [channels] = useCollection(collection(db, "channels"));

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      const docRef = doc(db, "channels", channelName);
      setDoc(docRef, {
        channelName,
      });
      console.log("Channel added with name:", channelName);
    }
  };

  return (
    <div className="bg-[#2f3136] flex flex-col min-w-max">
      <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
        Official PAPA Server... <ChevronDownIcon className="h-5 ml-2" />
      </h2>
      <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
        <div className="flex items-center p-2 mb-2">
          <ChevronDownIcon className="h-3  mr-2" />
          <h4 className="font-semibold ">Channels</h4>
          <PlusIcon
            className="h-6 ml-auto cursor-pointer hover:text-white"
            onClick={handleAddChannel}
          />
        </div>
        <div className="flex flex-col space-y-2 px-2 mb-4">
          {channels?.docs.map((doc) => (
            <Channel
              key={doc.id}
              id={doc.id}
              channelName={doc.data().channelName}
            />
          ))}
        </div>
      </div>
      <UserRow />
    </div>
  );
}

export default ChannelsSection;
