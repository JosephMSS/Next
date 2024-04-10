import { Playfair, Raleway } from "next/font/google";

export const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
