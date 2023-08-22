import Link from "next/link";
import { FC } from "react";

type Props = {
  size: number;
};

const ViberIcon: FC<Props> = ({size=32}) => {
  return (
    <Link className="icon" href="https://viber.click/79202533224" target="_blank" aria-label="Viber Статский советник">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128.000000 128.000000">
        <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M429 1135 c-105 -33 -203 -133 -234 -239 -21 -70 -20 -285 1 -356 9
        -29 23 -65 32 -79 24 -40 94 -111 125 -127 26 -14 27 -16 27 -105 0 -122 9
        -124 108 -26 l77 75 130 4 c115 3 137 7 187 30 80 37 149 105 184 181 28 60
        29 66 29 227 0 162 -1 166 -29 224 -37 76 -101 140 -174 174 -54 26 -65 27
        -237 29 -136 2 -191 -1 -226 -12z m356 -149 c55 -25 100 -71 122 -125 15 -34
        20 -132 8 -151 -13 -22 -25 3 -25 53 -1 103 -66 185 -164 207 -73 16 -78 19
        -71 30 11 18 78 11 130 -14z m-246 -90 c64 -69 65 -83 9 -119 -20 -12 -28 -26
        -28 -46 0 -35 47 -102 93 -130 49 -30 81 -27 107 9 12 17 30 30 43 30 29 0
        127 -98 127 -126 0 -13 -18 -38 -45 -63 -55 -50 -85 -53 -170 -13 -157 75
        -313 266 -318 389 -2 37 3 47 38 83 55 56 79 54 144 -14z m220 29 c59 -30 112
        -125 95 -169 -10 -27 -28 -12 -35 28 -3 20 -12 48 -20 62 -15 30 -77 64 -113
        64 -25 0 -40 12 -29 24 12 11 74 6 102 -9z m-13 -73 c41 -33 60 -97 27 -90 -9
        2 -20 14 -23 28 -3 16 -19 32 -43 43 -20 10 -37 23 -37 28 0 15 54 9 76 -9z"></path>
        </g>
      </svg>
    </Link>
  );
}

export default ViberIcon;