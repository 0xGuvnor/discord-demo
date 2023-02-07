import Head from "next/head";
import Home from "../../components/Home";
import { selectChannelName } from "../../lib/redux/features/channelSlice";
import { useAppSelector } from "../../lib/redux/hooks";

const ChannelSlug = () => {
  const channelName = useAppSelector(selectChannelName);

  return (
    <div>
      <Head>
        <title>{`Discord - #${channelName}`}</title>
        <link rel="icon" href="/discord_favicon.ico" />
      </Head>

      <Home />
    </div>
  );
};
export default ChannelSlug;
