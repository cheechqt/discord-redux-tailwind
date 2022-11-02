import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/solid";
import { redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";

import Sidebar from "./Sidebar";
import ChatsBar from "./ChatsBar";

function Main() {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user && redirect("/")}
      <div className="flex h-screen">
        <Sidebar />
        <ChatsBar />
      </div>
    </>
  );
}

export default Main;
