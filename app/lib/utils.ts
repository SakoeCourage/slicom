import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatnumber(num: number): string | undefined {
  if (typeof (Number(num)) !== 'number') {
    return undefined
  }
  return new Intl.NumberFormat('en-US').format(num)
}


export function formatcurrency(amount: number): string | undefined {
  if (!amount) return
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHS', notation: 'standard' }).format(amount)
}