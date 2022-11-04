import { TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import { auth, db } from "firebase.js";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Message({
  id,
  message,
  timestamp,
  name,
  email,
  photoURL,
  channelName,
  inputRef,
}) {
  const [user] = useAuthState(auth);

  return (
    <div className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-[#32353B] group">
      <img
        src={photoURL}
        alt=""
        className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="hover:underline text-white text-sm cursor-pointer">
            {name}
          </span>
          <span className="text-[#72767d] text-xs">
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className="text-sm text-[#dcddde]">{message}</p>
      </div>
      {user?.email === email && (
        <div
          className=" hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] hover:text-white cursor-pointer"
          onClick={() => {
            const colRef = doc(
              collection(doc(db, "channels", channelName), "messages"),
              id
            );

            deleteDoc(colRef, {
              timestamp: new Date(),
              message: inputRef.current.value,
              name: user?.displayName,
              photoURL: user?.photoURL,
              email: user?.email,
            });
          }}
        >
          <TrashIcon className="h-5 hidden group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Message;
