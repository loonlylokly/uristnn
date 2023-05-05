import Image from "next/image";
import { FC } from "react";

type Props = {
  size: number;
};

const CheckmarkIcon: FC<Props> = ({size}) => {
  return (
    <Image
      src="/icons/checkmark.svg"
      alt='Позвонить'
      width={size}
      height={size}
    />
  );
}

export default CheckmarkIcon;