import { useState } from "react"
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/auth.schema";
import { useDispatch } from "react-redux";
const Login = ()=>{
  const dispatch = useDispatch()
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        // dispatch(startLoading());
        // const value = await dispatch(
        //   adminLogin({ email: values.email, password: values.password })
        // );

        // if (value.type === "/admin/admin_login/fulfilled") {
        //   dispatch(stopLoading());
        //   navigate("/dashboard");
        // } else {
        //   dispatch(stopLoading());
        //   return;
        // }
        // action.resetForm();
      },
    });   
    const [showPassword,setShowPassword]= useState(true)
    return (
        <div>
      <div className= "mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <div className= "bg-white shadow-xl rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
          <div className= "p-6 sm:p-8 lg:p-16 space-y-8 border-t-4 border-[#e46f33]">
            <h2 className= "text-[1.2rem] md:text-3xl font-bold text-gray-900 text-center">
              Nrx & Baha Admin Login
            </h2>
            <form className= "mt-4 md:mt-8 space-y-6" 
            onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className= "text-sm text-[#868686] block mb-2 font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className= "bg-[#fff] border border-[#d5d5d5] text-[#000] sm:text-sm focus:[#e46f33] focus:[#e46f33] block w-full p-2.5 rounded-[7px]"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className= "text-[#FF0000] text-sm">{`*${errors.email}`}</p>
                ) : null}
              </div>
              <div className= "signinPasswordn mt-4">
                <label
                  htmlFor="password"
                  className= "text-sm font-medium text-[#868686] block mb-2"
                >
                  Your password
                </label>
                <div className= "flex border border-gray-300 rounded-lg relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className= "bg-[#fff] text-[#000] sm:text-sm focus:[#e46f33] focus:[#e46f33] block w-full p-2.5 rounded-[7px] pr-[35px]"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <button
                    type="button"
                    className= "view-password-button px-2 absolute right-0 top-3"
                    onClick={() => setShowPassword((state) => !state)}
                  >
                    {showPassword ? (
                      <BiShow size={"20px"} />
                    ) : (
                      <BiHide size={"20px"} />
                    )}
                  </button>
                </div>
                {errors.password && touched.password ? (
                  <p className= "text-[#FF0000] text-sm">{`*${errors.password}`}</p>
                ) : null}
              </div>
              <div className= "block md:flex justify-between">
                <div className= "flex items-center h-5 common-checkbox">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    name="remember"
                    type="checkbox"
                    className= "bg-gray-50 border-gray-300 focus:ring-3 focus:[#e46f33] h-4 w-4 rounded mr-1"
                  />
                  <label
                    htmlFor="remember"
                    className= "font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link className= "underline" to="/forget-password">
                  Forget Password
                </Link>
              </div>
              <div className= "text-center">
              <div>
      <Button
        type="submit"
        className="transition-all shadow-xl text-white bg-[#e46f33] hover:bg-[#000000] focus:ring-4 focus:[#e46f33] font-medium rounded-lg text-base px-5 py-3 min-w-[150px] sm:w-auto text-center"
      >
        Submit
      </Button>
    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login