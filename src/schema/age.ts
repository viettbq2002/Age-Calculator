import * as yup from "yup";

export const ageSchema = yup.object({
  date: yup
    .number()
    .typeError("Date is required")
    .required("Date is required")
    .integer("Invalid date") // Ensures it's an integer
    .positive("Invalid date") // Ensures it's positive
    .min(1, "Invalid date") // Ensures it's at least 1
    .max(31, "Invalid date"), // Ensures it's no more than 31
  month: yup
    .number()
    .typeError("Date is required")
    .required("Month is required")
    .integer("Invalid month")
    .positive("Invalid month")
    .min(1, "Invalid month")
    .max(12, "Invalid month"),
  year: yup
    .number()
    .typeError("Year is required")
    .required("Year is required")
    .integer("Invalid year")
    .positive("Invalid year")
    .min(1800, "Invalid year")
    .max(3000, "Invalid year"),
});
export type birth = yup.InferType<typeof ageSchema>;
