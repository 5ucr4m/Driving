import { css } from "styled-components";

const colors = {
  accent: "#FF4957",
  primary: "#27A9FF",
  secondary: "#4DA1FF",
  tertiary: "#FFE358",
  black: "#2F2F2F",
  white: "#FFFFFF",
  gray: "#BDBFC7",
  gray2: "#D8D8D8",
  gray3: "#F0F0F0",
  gray4: "#F7F8FA"
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  border: 15,
  padding: 25,

  // font sizes
  h1: css`
    font-size: 39px;
  `,
  h2: css`
    font-size: 29px;
  `,
  h3: css`
    font-size: 19px;
  `,
  title: css`
    font-size: 18px;
  `,
  header: css`
    font-size: 24px;
    font-weight: bold;
  `,
  body: css`
    font-size: 12px;
  `,
  caption: css`
    font-size: 12px;
    font-weight: 500;
  `,
  small: css`
    font-size: 8px;
  `,
  shadow: css`
    box-shadow: 0px 2px 13px rgba(100, 100, 100, 0.13);
  `
};

const fonts = {
  h1: {
    fontFamily: "Rubik-Light",
    fontSize: sizes.h1
  },
  h2: {
    fontFamily: "Rubik-Medium",
    fontSize: sizes.h2
  },
  h3: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.h3
  },
  header: {
    fontFamily: "Rubik-Bold",
    fontSize: sizes.header
  },
  title: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },
  small: {
    fontSize: sizes.small
  }
};

export { colors, sizes, fonts };
