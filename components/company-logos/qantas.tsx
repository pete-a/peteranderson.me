import * as React from "react";
import { Theme } from "../theme";

interface CustomProps {
  theme: Theme;
}

function SvgQantas(props: React.SVGProps<SVGSVGElement> & CustomProps) {
  const color = props.theme.name === "dark" ? "#fff" : "#323232";
  return (
    <svg
      viewBox="0 0 122 24"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M9.15 24h24.61L14 4.19A14.112 14.112 0 004.13 0H0l.31.81 1.36 3.58L9.15 24z"
        fill="url(#qantas_svg___Linear1)"
        fillRule="nonzero"
      />
      <path
        d="M1.67 4.39C4.37 9 11.44 9.48 12.21 16.64c.033.292.26.527.55.57a24.349 24.349 0 0111.49 5.08.094.094 0 00.07 0 .153.153 0 00.09 0 .13.13 0 000-.18 24.441 24.441 0 00-8.58-5.83l-1-.4a1.374 1.374 0 01-.85-1.3c.06-2.14 5.11-1.71 5.62-2.73l.09-.18a9.32 9.32 0 00-3.64-1.93c-.014.269.067.535.23.75.31.49-.33 1.27-1.24.43l-.04-.07C8.14 4.59 3 7.83.31.81l1.36 3.58z"
        fill="#fff"
        fillRule="nonzero"
      />
      <path
        d="M18.1 11.55a2.13 2.13 0 01-1.81-1.06.532.532 0 01-.456.8h-.014V13c.74-.22 1.58-.35 2.28-.5v-.95z"
        fill="url(#qantas_svg___Linear2)"
        fillRule="nonzero"
      />
      <path
        d="M13.61 17.36a24.413 24.413 0 0110.64 4.93c-7.15-6.11-10.41-5.01-10.64-4.93z"
        fill="url(#qantas_svg___Linear3)"
        fillRule="nonzero"
      />
      <path
        d="M3.11 4.71A8.005 8.005 0 01.31.81l1.36 3.58C4.37 9 11.44 9.48 12.21 16.63c-.78-9.13-4.79-7.76-9.1-11.92z"
        fill="url(#qantas_svg___Linear4)"
        fillRule="nonzero"
      />
      <path
        d="M36.26 19.59c-4.86 0-7.95-2.53-7.95-5.7 0-3.17 3.27-5.7 8.09-5.7s8.1 2.48 8.1 5.57a4.323 4.323 0 01-1.79 3.47h2.86l-.68 1.18a2.154 2.154 0 01-2.11 1.18h-6.52zM36.4 17c2.66 0 4.89-1.32 4.89-3.12s-2.23-3.12-4.89-3.12c-2.66 0-4.89 1.32-4.89 3.12S33.74 17 36.4 17zM57.52 17.67h-7.66l-1.09 1.92H45.6l5.31-9.2a2.335 2.335 0 012.22-1.28h1.19a2.345 2.345 0 012.23 1.28l5.31 9.2h-3.24l-1.1-1.92zm-6.36-2.31h5.06l-2.34-4.18c-.06-.1-.1-.13-.19-.13s-.12 0-.18.13l-2.35 4.18zM77 9.11v10.48h-2.85l-8.34-6.94v6.94H63V9.11h1.77a2.555 2.555 0 011.89.68L74.15 16V9.11H77zM87.08 11.47v8.12h-2.84v-8.12h-5.82V9.11H92.9v2.36h-5.82zM102.35 17.67h-7.67l-1.09 1.92h-3.17l5.31-9.2A2.344 2.344 0 0198 9.11h1.18a2.345 2.345 0 012.23 1.28l5.31 9.2h-3.24l-1.13-1.92zM96 15.36h5.07l-2.37-4.18c-.06-.1-.1-.13-.18-.13-.08 0-.13 0-.19.13L96 15.36zM107.66 18.84l-.27-.08.72-2.28c2.005.618 4.092.928 6.19.92 3.23 0 4-.38 4-.78 0-.17-.12-.3-.37-.38a37.764 37.764 0 00-3.86-.73 21.76 21.76 0 01-5.2-1.16 2.366 2.366 0 01-1.55-2.21 2.44 2.44 0 011-1.94 8.73 8.73 0 015.17-1.2c2.505-.032 5.005.25 7.44.84l.22.07-.6 2.22a29.195 29.195 0 00-6.47-.79 11.676 11.676 0 00-3.08.26c-.31.1-.43.24-.43.41 0 .17.09.29.4.39 1.234.312 2.487.546 3.75.7 1.698.18 3.373.532 5 1.05a2.535 2.535 0 011.86 2.3c0 1.31-1 2.27-2.76 2.8-1.35.357-2.744.525-4.14.5a25.3 25.3 0 01-7.02-.91z"
        fill={color}
        fillRule="nonzero"
      />
      <defs>
        <linearGradient
          id="qantas_svg___Linear1"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(-29.06) rotate(55.62 .412 -1.11)"
        >
          <stop offset={0} stopColor="#be0000" />
          <stop offset={0.39} stopColor="#de0000" />
          <stop offset={0.77} stopColor="#f60000" />
          <stop offset={1} stopColor="red" />
        </linearGradient>
        <linearGradient
          id="qantas_svg___Linear2"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-85 15.57 -2.649) scale(2.54)"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.65} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.69} stopColor="#ededed" stopOpacity={0.23} />
          <stop offset={0.76} stopColor="#d7d7d7" stopOpacity={0.5} />
          <stop offset={0.81} stopColor="#c6c6c6" stopOpacity={0.72} />
          <stop offset={0.87} stopColor="#b9b9b9" stopOpacity={0.87} />
          <stop offset={0.91} stopColor="#b2b2b2" stopOpacity={0.97} />
          <stop offset={0.95} stopColor="#afafaf" />
          <stop offset={1} stopColor="#afafaf" />
        </linearGradient>
        <linearGradient
          id="qantas_svg___Linear3"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.61 19.76) scale(10.64)"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.07} stopColor="#f3f3f3" stopOpacity={0.15} />
          <stop offset={0.21} stopColor="#dedede" stopOpacity={0.41} />
          <stop offset={0.35} stopColor="#cdcdcd" stopOpacity={0.62} />
          <stop offset={0.49} stopColor="silver" stopOpacity={0.79} />
          <stop offset={0.63} stopColor="#b7b7b7" stopOpacity={0.91} />
          <stop offset={0.77} stopColor="#b1b1b1" stopOpacity={0.98} />
          <stop offset={0.9} stopColor="#afafaf" />
          <stop offset={1} stopColor="#afafaf" />
        </linearGradient>
        <linearGradient
          id="qantas_svg___Linear4"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(11.9 0 0 11.9 .31 8.72)"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.25} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.36} stopColor="#f7f7f7" stopOpacity={0.11} />
          <stop offset={0.58} stopColor="#e1e1e1" stopOpacity={0.38} />
          <stop offset={0.88} stopColor="#bebebe" stopOpacity={0.82} />
          <stop offset={1} stopColor="#afafaf" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgQantas;
