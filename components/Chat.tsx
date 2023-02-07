import { useAuthState } from "react-firebase-hooks/auth";
import { BiHash } from "react-icons/bi";
import {
  BsFillPinAngleFill,
  BsBellFill,
  BsQuestionCircleFill,
  BsGiftFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";
import { HiUsers, HiOutlineSearch } from "react-icons/hi";
import { HiGif } from "react-icons/hi2";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdInbox } from "react-icons/md";
import { auth, db } from "../lib/firebase";
import {
  selectChannelId,
  selectChannelName,
} from "../lib/redux/features/channelSlice";
import { useAppSelector } from "../lib/redux/hooks";
import { MouseEvent, useRef } from "react";
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

const Chat = () => {
  const channelName = useAppSelector(selectChannelName);
  const channelId = useAppSelector(selectChannelId);
  const [user] = useAuthState(auth);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [messages] = useCollection(
    query(
      collection(db, "channels", channelId ? channelId : " ", "messages"),
      orderBy("timestamp", "asc")
    )
  );

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSend = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputRef.current?.value !== "") {
      await addDoc(collection(db, "channels", channelId, "messages"), {
        timestamp: serverTimestamp(),
        message: inputRef.current?.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });

      inputRef.current!.value = "";
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <header className="flex items-center justify-between p-3 space-x-5 border-b border-gray-800">
        <div className="flex items-center space-x-1.5">
          <BiHash className="text-gray-400 w-7 h-7" />
          <h4 className="text-sm text-white">{channelName}</h4>
        </div>

        <div className="flex items-center space-x-3">
          <BsBellFill className="headerIcon" />
          <BsFillPinAngleFill className="headerIcon" />
          <HiUsers className="headerIcon" />
          <div className="flex items-center px-2 py-1 text-xs bg-gray-800 rounded">
            <input
              type="text"
              placeholder="Search"
              className="text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
            <HiOutlineSearch className="w-4 h-4 text-gray-400" />
          </div>
          <MdInbox className="headerIcon" />
          <BsQuestionCircleFill className="headerIcon" />
        </div>
      </header>

      <main className="flex-1 overflow-y-scroll">
        {messages?.docs.map((doc) => {
          const { message, email, name, photoURL, timestamp } = doc.data();

          return (
            <Message
              key={doc.id}
              id={doc.id}
              message={message}
              email={email}
              name={name}
              photoURL={photoURL}
              timestamp={timestamp}
            />
          );
        })}
        <div ref={chatRef}></div>
      </main>

      <div className="flex bg-gray-500 items-center p-2.5 mx-5 mb-7 rounded-lg">
        <AiFillPlusCircle className="ml-1 mr-4 chatIcon" />
        <form className="flex-1">
          <input
            type="text"
            disabled={!channelId}
            placeholder={
              channelId ? `Message #${channelName}` : "Select a channel"
            }
            ref={inputRef}
            className="w-full text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button hidden type="submit" onClick={handleSend}>
            Send
          </button>
        </form>
        <div className="flex space-x-4">
          <BsGiftFill className="chatIcon" />
          <HiGif className="chatIcon" />
          <BsEmojiHeartEyesFill className="chatIcon" />
        </div>
      </div>
    </div>
  );
};
export default Chat;
