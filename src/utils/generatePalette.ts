type PaletteType = "triad" | "complementary" | "mono" | "analog";

type HSL = {
  baseHue: number;
  saturation: number;
  lightness: number;
};

import { hslToHex } from "./colorHelpers";

export function generatePalette(type: PaletteType) {
  const paletteHSL = {
    baseHue: Math.random() * 360,
    saturation: 70,
    lightness: 50,
  };

  if (type == "triad") {
    return triadPalette(paletteHSL);
  }

  if (type == "mono") {
    return monoPalette(paletteHSL);
  }

  if (type == "complementary") {
    return complementaryPalette(paletteHSL);
  }

  if (type == "analog") {
    return analogPalette(paletteHSL);
  }
}

function triadPalette({ baseHue, saturation, lightness }: HSL) {
  const secondColor = (baseHue + 120) % 360;
  const thirdColor = (baseHue + 240) % 360;

  return [baseHue, secondColor, thirdColor].map((h) =>
    hslToHex(h, saturation, lightness),
  );
}

function monoPalette({ baseHue, saturation, lightness }: HSL) {
  const firstColor = hslToHex(baseHue, saturation, lightness);
  const secondColor = hslToHex(baseHue, saturation, lightness - 20);
  const thirdColor = hslToHex(baseHue, saturation, lightness - 30);
  const fourthColor = hslToHex(baseHue, saturation, lightness - 40);

  return [firstColor, secondColor, thirdColor, fourthColor];
}

function complementaryPalette({ baseHue, saturation, lightness }: HSL) {
  const complementaryHue = (baseHue + 180) % 360;

  const clamp = (value: number) => Math.max(0, Math.min(100, value));

  return [
    hslToHex(baseHue, saturation, clamp(lightness)),
    hslToHex(baseHue, saturation, clamp(lightness + 15)),
    hslToHex(complementaryHue, saturation, clamp(lightness)),
    hslToHex(complementaryHue, saturation, clamp(lightness - 15)),
  ];
}

function analogPalette({ baseHue, saturation, lightness }: HSL) {
  const secondColor = (baseHue + 30) % 360;
  const thirdColor = (baseHue - 30 + 360) % 360;
  const fourthColor = (baseHue + 60) % 360;

  return [
    hslToHex(baseHue, saturation, lightness),
    hslToHex(secondColor, saturation, lightness + 5),
    hslToHex(thirdColor, saturation, lightness - 5),
    hslToHex(fourthColor, saturation, lightness + 10)
  ]
}
