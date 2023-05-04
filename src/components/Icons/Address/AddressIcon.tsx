import Image from "next/image";
import { FC } from "react";

type Props = {
  size: number;
};

const AddressIcon: FC<Props> = ({size}) => {
  return (
    <Image
      src="/icons/address.svg"
      alt='Позвонить'
      width={size}
      height={size}
    />
  );
}

export default AddressIcon;