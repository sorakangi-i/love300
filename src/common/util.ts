import { ScreenBoundary } from "./constant";

export const getMediaQueryCSS = (
  cssProperties: string,
  boundary: string = ScreenBoundary.Phone2PC
) => `
    @media screen and (max-width: ${boundary}) {
        ${cssProperties}
    }
`;

export const getRatioSize = (
  targetNumber: number,
  isPhone?: boolean,
  unit: "%" | "px" | "vw" = "vw"
): string => {
  return `${(targetNumber / (isPhone ? 375 : 1920)) * 100}${unit}`;
};
