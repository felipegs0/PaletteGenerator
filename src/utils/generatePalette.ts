type PaletteType = "triad" | "complementary" | "mono" | "analog";

type HSL = {
  baseHue: number;
  saturation: number;
  lightness: number;
};

// Criar uma config para cada paleta depois usando objeto

import { hslToHex } from "./colorHelpers";

export function generatePalette(type: PaletteType) {
  const paletteHSL = {
    baseHue: Math.random() * 360,
  };

  if (type == "triad") {
    return triadPalette({baseHue: Math.random() * 360, saturation: 70, lightness: 0});
  }

  if (type == "mono") {
    return monoPalette({baseHue: Math.random() * 360, saturation: 70, lightness: 50});
  }

  if (type == "complementary") {
    return complementaryPalette({baseHue: Math.random() * 360, saturation: 70, lightness: 50});
  }

  if (type == "analog") {
    return analogPalette(paletteHSL);
  }
}

function triadPalette({ baseHue, saturation, lightness }: HSL) {
  const secondHue = (baseHue + 120) % 360;
  const thirdHue = (baseHue + 240) % 360;

  const colors = [
    hslToHex(baseHue, saturation, lightness + 50),
    hslToHex(baseHue, saturation, lightness + 15),
    hslToHex(secondHue, saturation, lightness + 50),
    hslToHex(secondHue, saturation, lightness + 98),
    hslToHex(thirdHue, saturation, lightness + 95),
  ]

  return {
    bg: colors[4],
    surface: colors[3],
    text: colors[1],
    primary: colors[0],
    secondary: colors[2],
  }
}

function monoPalette({ baseHue, saturation, lightness }: HSL) {
  const colors = [
    hslToHex(baseHue, saturation - 50, lightness + 40),
    hslToHex(baseHue, saturation - 30, lightness + 20),
    hslToHex(baseHue, saturation + 10, lightness),
    hslToHex(baseHue, saturation + 20, lightness - 20),
    hslToHex(baseHue, saturation + 25, lightness - 35),
  ]

  return {
    bg: colors[1],
    surface: colors[0],
    text: colors[4],
    primary: colors[3],
    secondary: colors[2]
  }
}

function complementaryPalette({ baseHue, saturation, lightness }: HSL) {
  const complementaryHue = (baseHue + 180) % 360;
  const colors = [
    hslToHex(baseHue, saturation, lightness - 35),
    hslToHex(baseHue, saturation - 20, lightness + 30),
    hslToHex(baseHue, saturation, lightness + 45),
    hslToHex(complementaryHue, saturation, lightness),
    hslToHex(complementaryHue, saturation, lightness - 15),
  ];
  return {
    bg: colors[1],
    surface: colors[2],
    text: colors[0],
    primary: colors[4],
    secondary: colors[3]
  }
}

function analogPalette({ baseHue, saturation, lightness }: HSL) {
  const secondColor = (baseHue + 30) % 360;
  const thirdColor = (baseHue - 30 + 360) % 360;
  const fourthColor = (baseHue + 60) % 360;

  return [
    hslToHex(baseHue, saturation, lightness),
    hslToHex(secondColor, saturation, lightness + 5),
    hslToHex(thirdColor, saturation, lightness - 5),
    hslToHex(fourthColor, saturation, lightness + 10),
  ];
}
