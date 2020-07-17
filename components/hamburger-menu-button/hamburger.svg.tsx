import * as React from "react";

interface IProps {
  width?: number | string;
  height?: number | string;
  color: string;
  topBottomBarsStyle: string;
  middleOneStyle: string;
  middleTwoStyle: string;
}

function SvgHamburger(props: IProps) {
  return (
    <svg
      viewBox="0 0 1531 1534"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width={props.width}
    >
      <path
        d="M1530.91 84.546c0-46.662-37.884-84.546-84.546-84.546H84.544C37.882 0-.002 37.884-.002 84.546v62.959c0 46.662 37.884 84.545 84.546 84.545h1361.82c46.662 0 84.546-37.883 84.546-84.545V84.546z"
        fill={props.color}
        className={props.topBottomBarsStyle}
      />
      <path
        d="M1530.91 735.424c0-46.662-37.884-84.546-84.546-84.546H84.544c-46.662 0-84.546 37.884-84.546 84.546v62.959c0 46.662 37.884 84.546 84.546 84.546h1361.82c46.662 0 84.546-37.884 84.546-84.546v-62.959z"
        fill={props.color}
        className={props.middleOneStyle}
      />

      <path
        d="M1530.91 735.424c0-46.662-37.884-84.546-84.546-84.546H84.544c-46.662 0-84.546 37.884-84.546 84.546v62.959c0 46.662 37.884 84.546 84.546 84.546h1361.82c46.662 0 84.546-37.884 84.546-84.546v-62.959z"
        fill={props.color}
        className={props.middleTwoStyle}
      />
      <path
        className={props.topBottomBarsStyle}
        d="M1530.91 1386.3c0-46.662-37.884-84.545-84.546-84.545H84.544c-46.662 0-84.546 37.883-84.546 84.545v62.96c0 46.661 37.884 84.545 84.546 84.545h1361.82c46.662 0 84.546-37.884 84.546-84.545v-62.96z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgHamburger;
