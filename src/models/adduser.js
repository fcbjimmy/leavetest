import * as yup from "yup";

const capital = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
const userId = /^[a-zA-Z0-9_.]+$/; //regex
// const userId = /^[A-Za-z0-9_\.]+$/;
export const schema = yup.object().shape({
  userId: yup
    .string()
    .min(4, "User Id must be at least 4 characters long")
    .max(32)
    .matches(
      userId,
      "Limit to one word, capital letters, dots and underscores allowed"
    )
    .required(),
  password: yup.string().required(),
  username: yup
    .string()
    .min(4, "Name must be at least 4 characters long")
    .max(32)
    .matches(capital, "Limit to two words with first letter capitalized")
    .required(),
  department: yup.string(),
  user_group: yup.string().required(),
  role: yup.string().required("Role is required!").nullable(),
  features: yup.array(),
  email: yup.string().email("Please enter a valid email!"),
  phone: yup
    .string()
    .min(8, "min 8 digits")
    .typeError("Amount must be a number and min 8 digits")
    .default(""),
  supervisor: yup.string(),
  annual_balance: yup.number(),
  annual_prebalance: yup.number(),
  sickLeave_balance: yup.number(),
  sickLeave_prebalance: yup.number(),
});
