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

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header channelName={channelName} />
      <Main />
      <Footer
        channelId={channelId}
        channelName={channelName}
        inputRef={inputRef}
        user={user}
        // handleOnClick={scrollToBottom}
      />
    </>
  );
}

export default Chat;
