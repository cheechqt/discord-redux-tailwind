import {
  FaceSmileIcon,
  GiftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { db } from "firebase.js";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

function Footer({ channelName, channelId, inputRef, handleOnClick, user }) {
  const sendMessage = (e) => {
    e.preventDefault();

    if (inputRef.current.value !== "") {
      updateDoc(doc(db, "channels", channelName), {
        messages: {
          timestamp: serverTimestamp(),
          message: inputRef.current.value,
          name: user?.displayName,
          photoURL: user?.photoURL,
          email: user?.email,
        },
      });
    }

    inputRef.current.value = "";
    handleOnClick && handleOnClick();
  };

  return (
    <div className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg">
      <PlusCircleIcon className="icon mr-4" />
      <form className="flex-grow">
        <input
          type="text"
          disabled={!channelId}
          placeholder={
            channelId ? `Message #${channelName}` : "Select a channel"
          }
          className="bg-transparent focus:outline-none text-[#dcddde] w-full placeholder-[#72767d] text-sm"
          ref={inputRef}
        />
        <button hidden type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
      <GiftIcon className="icon mr-2" />
      <FaceSmileIcon className="icon" />
    </div>
  );
}

export default Footer;
