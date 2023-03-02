import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  iconUrl: string;
  alt: string;
}

const ServerIcon = ({ iconUrl, alt }: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (alt === "Ethereum Icon") {
      setActive(true);
    }
  }, [alt]);

  return (
    <div className="relative flex group">
      <div
        className={`${
          active ? "h-10" : "h-3 group-hover:h-5 group-hover:rounded"
        } absolute self-center w-3 -ml-5 transition-all duration-100 ease-linear bg-gray-200 rounded-full`}
      ></div>
      <Image
        src={iconUrl}
        alt={alt}
        width={48}
        height={48}
        className="serverIcon"
      />
    </div>
  );
};
export default ServerIcon;
