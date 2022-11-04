import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";

import Sidebar from "./Sidebar";
import ChannelsSection from "./ChannelsSection";
import Chat from "../Chat/Chat";

function Main() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      {!user && navigate("/")}
      <div className="flex h-screen">
        <div className="flex h-screen bg-black">
          <Sidebar />
          <ChannelsSection />
        </div>
        <div className="bg-[#36393f] flex-grow">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Main;
