import * as React from "react";

interface IProps {
  theme: "light" | "dark"
  height: number
}

function SvgSkillChart(props: IProps) {
  const colors = colorsForTheme(props.theme);

  return (
    <svg
      viewBox="0 0 421 430"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <g fill="none" stroke={colors.line} strokeOpacity={0.1} strokeWidth={2.17}>
        <circle cx={210.417} cy={218.093} r={208.333} />
        <circle cx={210.417} cy={218.093} r={125} />
        <circle cx={210.417} cy={218.093} r={104.167} />
        <circle cx={210.417} cy={218.093} r={145.833} />
        <circle cx={210.417} cy={218.093} r={166.667} />
        <circle cx={210.417} cy={218.093} r={83.333} />
        <circle cx={210.417} cy={218.093} r={187.5} />
      </g>
      <g opacity={0.25} fill="none" stroke={colors.line} strokeOpacity="0.3" strokeWidth={2.17}>
        <path d="M210.417 8.855v418.476M29.211 113.474l362.411 209.238M29.211 322.712l362.411-209.238" />
      </g>
      <path
        d="M211.31 8.283l161.776 115.532-18.121 179.574-143.769 62.972-181.809-44.394 37.992-186.681L211.31 8.283z"
        fill={colors.area}
        fillOpacity={0.5}
      />
      <g fill={colors.dots}>
        <circle cx={210.578} cy={9.774} r={9.774} />
        <circle cx={371.725} cy={123.498} r={9.774} />
        <circle cx={353.618} cy={301.724} r={9.774} />
        <circle cx={212.297} cy={364.523} r={9.774} />
        <circle cx={32.302} cy={320.347} r={9.774} />
        <circle cx={68.58} cy={133.4} r={9.774} />
      </g>
    </svg>
  );
}

function colorsForTheme(theme: "light" | "dark") {
  if (theme === "light") {
    return {
      dots: "rgba(0,150,255,0.9)",
      area: "rgba(0,150,255,0.9)",
      line: "#777"
    }
  }
  return {
    dots: "rgba(200,220,255,0.8)",
    area: "#77bbff",
    line: "#fff"
  }
}

export default SvgSkillChart;

