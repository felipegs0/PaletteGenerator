type PaletteType = "triad" | "complementary" | "mono";
import { hslToHex } from "./colorHelpers";

export function generatePalette(type: PaletteType) {
  const baseHue = Math.random() * 360;
  const saturation = 70;
  const lightness = 50;

  if (type == "triad") {
    return triadPalette(baseHue, saturation, lightness);
  }

  if (type == "mono") {
    return monoPalette(baseHue, saturation, lightness);
  }

  if (type == "complementary") {
    return complementaryPalette(baseHue, saturation, lightness);
  }
}

function triadPalette(baseHue: number, saturation: number, lightness: number) {
  const secondColor = (baseHue + 120) % 360;
  const thirdColor = (baseHue + 240) % 360;

  return [baseHue, secondColor, thirdColor].map((h) =>
    hslToHex(h, saturation, lightness),
  );
}

function monoPalette(baseHue: number, saturation: number, lightness: number) {
  const firstColor = hslToHex(baseHue, saturation, lightness);
  const secondColor = hslToHex(baseHue, saturation, lightness - 20);
  const thirdColor = hslToHex(baseHue, saturation, lightness - 30);
  const fourthColor = hslToHex(baseHue, saturation, lightness - 40);

  return [firstColor, secondColor, thirdColor, fourthColor];
}

function complementaryPalette(
  baseHue: number,
  saturation: number,
  lightness: number
) {
  const complementaryHue = (baseHue + 180) % 360;

  const clamp = (value: number) => Math.max(0, Math.min(100, value));

  return [
    hslToHex(baseHue, saturation, clamp(lightness)),        // base
    hslToHex(baseHue, saturation, clamp(lightness + 15)),   // mais clara
    hslToHex(complementaryHue, saturation, clamp(lightness)), 
    hslToHex(complementaryHue, saturation, clamp(lightness - 15)), // mais escura
  ];
}
