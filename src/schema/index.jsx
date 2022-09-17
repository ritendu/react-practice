import * as yup  from "yup"

export const signupSchema = new yup.ObjectSchema({
    name:yup.string().min(2).max(25).required("Please enter your name"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(6).required("Please enter password"),
    confirm_password:yup.string().required().oneOf([yup.ref('password'),null],"Password must match")
})