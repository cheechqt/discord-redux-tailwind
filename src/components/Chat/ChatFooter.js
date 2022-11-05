import { forwardRef } from "react";
import {
  FaceSmileIcon,
  GiftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { db } from "firebase.js";
import { addDoc, collection, doc } from "firebase/firestore";

function Footer({ channelName, channelId, user, chatRef }, ref) {
  const scrollToBottom = () => {
    chatRef.current.scroll({
      top: chatRef.current.scrollHeight + 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (ref.current.value !== "") {
      const colRef = collection(doc(db, "channels", channelName), "messages");
      addDoc(colRef, {
        timestamp: new Date(),
        message: ref.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });
      ref.current.value = "";
      scrollToBottom();
    }
  };

  return (
    <footer className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg">
      <PlusCircleIcon className="icon mr-4" />
      <form className="flex-grow">
        <input
          type="text"
          disabled={!channelId}
          placeholder={
            channelId ? `Message #${channelName}` : "Select a channel"
          }
          className="bg-transparent focus:outline-none text-[#dcddde] w-full placeholder-[#72767d] text-sm"
          ref={ref}
        />
        <button hidden type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
      <GiftIcon className="icon mr-2" />
      <FaceSmileIcon className="icon" />
    </footer>
  );
}

export default forwardRef(Footer);
