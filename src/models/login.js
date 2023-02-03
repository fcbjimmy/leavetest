import * as yup from "yup";

export const schema = yup.object().shape({
  userId: yup.string().required("user Id is required!"),
  password: yup.string().required("Password is required!"),
});
