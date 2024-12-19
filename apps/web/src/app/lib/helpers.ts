import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const externalLinkCSS = `underline underline-offset-4 decoration-1 external-link`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}