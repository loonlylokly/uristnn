import Image from "next/image";
import { FC } from "react";

type Props = {
  width: number;
  height: number;
};

const Hamburger: FC<Props> = ({width, height}) => {
  return (
    <Image
      src="/icons/hamburger.svg"
      alt='Мобильное меню'
      width={width}
      height={height}
      loading = 'eager'
    />
  );
}

export default Hamburger;