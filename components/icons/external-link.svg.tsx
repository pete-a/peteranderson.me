import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  cssClass: string;
}

function SvgExternalLink(props: Props) {
  return (
    <svg width={12} height={12}>
      <g
        className={props.cssClass}
        fillRule="evenodd"
        clipRule="evenodd"
        opacity={0.75}
      >
        <path d="M2 2h3v1H3v6h6V7h1v3H2z" />
        <path d="M6.211 2H10v3.789L8.579 4.368 6.447 6.5 5.5 5.553l2.132-2.132z" />
      </g>
    </svg>
  );
}

export default SvgExternalLink;
