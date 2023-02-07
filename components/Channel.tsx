import { useRouter } from "next/router";
import { BiHash } from "react-icons/bi";
import { setChannelInfo } from "../lib/redux/features/channelSlice";
import { useAppDispatch } from "../lib/redux/hooks";

const Channel = ({ id, channelName }: { id: string; channelName: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );

    router.push(`/channels/${id}`);
  };

  return (
    <div
      onClick={setChannel}
      className="flex items-center p-1 space-x-2 font-medium rounded cursor-pointer group hover:bg-gray-600"
    >
      <BiHash className="w-5 h-5" />
      <p className="group-hover:text-white">{channelName}</p>
    </div>
  );
};
export default Channel;
