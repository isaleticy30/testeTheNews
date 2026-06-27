import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // Combina classes condicionais e resolve conflitos do Tailwind em uma unica string.
  return twMerge(clsx(inputs));
}
