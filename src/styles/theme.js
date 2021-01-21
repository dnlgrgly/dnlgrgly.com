const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export default {
  color: {
    // logo colors
    red: "#E20D17",
    orange: "#FB9325",
    yellow: "#F7D830",
    cyan: "#5CCCC8",

    // logo colors - darker, for background
    redBg: "#340002",
    orangeBg: "#472C17",
    yellowBg: "#474517",
    cyanBg: "#002E2C",

    // logo colors - light, for foreground
    redFg: "#E5C9CB",
    orangeFg: "#E8D0B6",
    yellowFg: "#E3DDBD",
    cyanFg: "#CCFAF8",

    // other colors
    background: "rgba(40, 0, 3, 1)",
    backgroundTrans: "rgba(40, 0, 3, 0)",
    foreground: "#EDCCCE",
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    null: "(max-width: 0px)",
  },
};
