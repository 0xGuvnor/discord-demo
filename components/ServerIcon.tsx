import Image from "next/image";

const ServerIcon = ({ iconUrl, alt }: { iconUrl: string; alt: string }) => {
  return (
    <div>
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
