import { useCollection } from "react-firebase-hooks/firestore";

function ChatMain() {
  const [messages] = useCollection();
  
  return (
    <main className="flex-grow overflow-y-scroll scrollbar-hide">
      <div></div>
    </main>
  );
}

export default ChatMain;
