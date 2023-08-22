import Image from "next/image";
import { FC } from "react";

type Props = {
  size: number;
};

const PhoneIcon: FC<Props> = ({size}) => {
  return (
    <Image
      src="/icons/phone.svg"
      alt='Позвонить'
      width={size}
      height={size}
    />
  );
}

export default PhoneIcon;