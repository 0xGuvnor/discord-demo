import { deleteDoc, doc, Timestamp } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useAppSelector } from "../lib/redux/hooks";
import { selectChannelId } from "../lib/redux/features/channelSlice";

interface Props {
  id: string;
  message: string;
  timestamp: Timestamp;
  email: string;
  name: string;
  photoURL: string;
}

const Message = ({ id, message, timestamp, email, name, photoURL }: Props) => {
  const [user] = useAuthState(auth);
  const channelId = useAppSelector(selectChannelId);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "channels", channelId, "messages", id));
  };

  return (
    <div className="flex items-center p-1 pl-5 my-5 mr-2 group hover:bg-gray-700/80">
      <Image
        src={photoURL}
        width={40}
        height={40}
        alt="Profile Picture"
        className="mr-3 rounded-full cursor-pointer hover:shadow-2xl"
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="text-sm cursor-pointer text-discord_green hover:underline">
            {name}
          </span>
          <span className="text-xs text-gray-500">
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className="text-sm text-white">{message}</p>
      </div>
      {user?.email === email && (
        <div
          onClick={handleDelete}
          className="p-1 ml-auto rounded cursor-pointer text-discord_red hover:bg-discord_red hover:text-white"
        >
          <RiDeleteBin6Fill className="hidden w-5 h-5 group-hover:inline" />
        </div>
      )}
    </div>
  );
};
export default Message;
