import Image from "next/image";
import { FC } from "react";

type Props = {
  size: number;
};

const EmailIcon: FC<Props> = ({size}) => {
  return (
    <Image
      src="/icons/email.svg"
      alt='Позвонить'
      width={size}
      height={size}
    />
  );
}

export default EmailIcon;