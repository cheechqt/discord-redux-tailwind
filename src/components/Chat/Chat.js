import { selectChannelId, selectChannelName } from "features/channelSlice";
import { auth } from "firebase.js";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import Footer from "./ChatFooter";
import Header from "./ChatHeader";
import Main from "./ChatMain";

function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const inputRef = useRef("");
  const chatRef = useRef(null);
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col h-screen">
      <Header channelName={channelName} />
      <Main ref={chatRef} inputRef={inputRef} channelName={channelName} />
      <Footer
        channelId={channelId}
        channelName={channelName}
        ref={inputRef}
        chatRef={chatRef}
        user={user}
      />
    </div>
  );
}

export default Chat;
