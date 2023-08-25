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
      loading = 'eager'
    />
  );
}

export default CheckmarkIcon;