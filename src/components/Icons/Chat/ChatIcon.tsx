import Image from "next/image";
import { FC } from "react";

type Props = {
  size: number;
};

const ChatIcon: FC<Props> = ({size}) => {
  return (
    <Image
      src="/icons/chat.svg"
      alt='Связаться'
      width={size}
      height={size}
    />
  );
}

export default ChatIcon;