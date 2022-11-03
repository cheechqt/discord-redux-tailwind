import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/24/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase.js";
import { useNavigate } from "react-router-dom";

function UserRow() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center space-x-8 bg-[#292b2f] p-2">
      <div className="flex items-center space-x-1">
        <img
          src={user?.photoURL}
          alt="user"
          className="h-10 rounded-full"
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
        />
        <h4 className="text-white text-xs font-medium">
          {user?.displayName}{" "}
          <span className="text-[#b9bbbe] block">
            #{user?.uid.substring(0, 4)}
          </span>
        </h4>
      </div>
      <div className="text-gray-400 flex items-center">
        <div className="hover:bg-[#3A3C43] p-2 rounded-md">
          <MicrophoneIcon className="h-5 icon " />
        </div>
        <div className="hover:bg-[#3A3C43] p-2 rounded-md">
          <PhoneIcon className="h-5 icon" />
        </div>
        <div className="hover:bg-[#3A3C43] p-2 rounded-md">
          <CogIcon className="h-5 icon" />
        </div>
      </div>
    </div>
  );
}

export default UserRow;
