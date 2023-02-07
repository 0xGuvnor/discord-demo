import { PlusIcon } from "@heroicons/react/24/outline";
import { FaSafari } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { RiHeadphoneFill, RiSettings5Fill } from "react-icons/ri";
import { HiChevronDown, HiPlus } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import ServerIcon from "./ServerIcon";
import Channel from "./Channel";
import { db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { signOut } from "firebase/auth";
import Chat from "./Chat";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const [channels] = useCollection(collection(db, "channels"));
  const router = useRouter();

  const handleAddChannel = async () => {
    const channelName = prompt("What do you want to name your channel?");

    if (channelName) {
      await addDoc(collection(db, "channels"), { channelName: channelName });
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex h-screen">
      {/* Servers column */}
      <div className="flex flex-col items-center justify-start p-3 space-y-3 bg-gray-800 max-w-max">
        <div className="relative w-12 h-12">
          <Image
            src="/discord_icon_white.svg"
            alt="Discord Icon"
            fill
            className="object-contain p-3 bg-gray-700 serverIcon hover:bg-blurple"
          />
        </div>
        <hr className="w-8 mx-auto border border-gray-700" />
        <ServerIcon iconUrl="/ethereum_logo.jpg" alt="Ethereum Icon" />
        <ServerIcon iconUrl="/fantom_logo.png" alt="Fantom Icon" />
        <ServerIcon iconUrl="/polygon_logo.jpg" alt="Polyon Icon" />
        <ServerIcon iconUrl="/avax_logo.png" alt="Avalanche Icon" />

        <div className="w-12 h-12 bg-gray-700 serverIcon group hover:bg-discord_green">
          <PlusIcon className="p-3 text-discord_green group-hover:text-white" />
        </div>

        <div className="flex items-center justify-center w-12 h-12 bg-gray-700 serverIcon group hover:bg-discord_green">
          <FaSafari className="w-6 h-6 text-discord_green group-hover:text-white" />
        </div>
      </div>

      {/* Server column */}
      <div className="flex flex-col bg-gray-700 max-w-[288px]">
        <div className="flex items-center justify-between p-4 text-white transition-all duration-200 ease-in-out border-b border-gray-800 shadow-md cursor-pointer hover:bg-gray-600 w-72">
          <h2 className="text-sm font-bold truncate w-52">
            blah blah blah blah blah blah blah
          </h2>
          <HiChevronDown className="w-5 h-5" />
        </div>

        <div className="overflow-y-scroll text-gray-400 grow">
          <div className="flex items-center p-2">
            <HiChevronDown className="w-4 h-4 mr-1" />
            <h4 className="font-semibold">Channels</h4>
            <HiPlus
              onClick={handleAddChannel}
              className="w-6 h-6 ml-auto cursor-pointer hover:text-white"
            />
          </div>

          <div className="flex flex-col px-2 mb-4 space-y-2">
            {channels?.docs.map((doc) => (
              <Channel
                key={doc.id}
                id={doc.id}
                channelName={doc.data().channelName}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between p-2 shadow-2xl bg-gray-800/80">
          <div className="flex items-center max-w-[160px] p-1 space-x-1 rounded cursor-pointer hover:bg-gray-700">
            <Image
              src={user?.photoURL!}
              alt="User Profile Image"
              width={40}
              height={40}
              onClick={async () => await signOut(auth)}
              className="rounded-full cursor-pointer"
            />
            <h4 className="text-xs font-medium text-white truncate">
              {user?.displayName}
              <p className="text-gray-300">#{user?.uid.substring(0, 4)}</p>
            </h4>
          </div>

          <div className="flex items-center space-x-1">
            <IoMdMic className="userIcon" />
            <RiHeadphoneFill className="userIcon" />
            <RiSettings5Fill className="userIcon" />
          </div>
        </div>
      </div>

      {/* Chat column */}
      <div className="flex flex-1 bg-gray-600">
        <Chat />
      </div>
    </div>
  );
};
export default Home;
