import { differenceInYears, differenceInMonths, differenceInDays } from "date-fns";
import { birth } from "../schema/age";
export function calculateAge({ date, month, year }: birth) {
  // Validate inputs
  if (!date || !month || !year) {
    throw new Error("Date, month, and year must be provided");
  }

  // Create the birthdate object
  const birthDate = new Date(year, month - 1, date); // month is 0-indexed in JavaScript

  // Get the current date
  const currentDate = new Date();

  // Calculate age in years, months, and days
  const years = differenceInYears(currentDate, birthDate);
  const adjustedBirthDate = new Date(year + years, month - 1, date);
  const months = differenceInMonths(currentDate, adjustedBirthDate);
  const days = differenceInDays(currentDate, new Date(year + years, month - 1 + months, date));

  return {
    date: days,
    month: months,
    year: years,
  } satisfies birth;
}
