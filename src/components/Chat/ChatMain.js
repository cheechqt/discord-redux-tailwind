import { db } from "firebase.js";
import { collection, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

function ChatMain({ chatRef, inputRef, channelName }) {
  const [messages] = useCollection(
    channelName && collection(doc(db, "channels", channelName), "messages")
  );

  return (
    <main className="flex-grow overflow-y-scroll scrollbar-hide">
      {messages?.docs
        .sort(
          (a, b) =>
            a.data().timestamp.toDate().getTime() -
            b.data().timestamp.toDate().getTime()
        )
        .map((doc) => {
          console.log(doc.data().timestamp.toDate().getTime());

          const { message, timestamp, name, photoURL, email } = doc.data();

          return (
            <Message
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              name={name}
              email={email}
              photoURL={photoURL}
              channelName={channelName}
              inputRef={inputRef}
            />
          );
        })}
      <div ref={chatRef} className="pb-16" />
    </main>
  );
}

export default ChatMain;
