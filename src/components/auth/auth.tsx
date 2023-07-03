import { SchemaTypes, LoginTypes } from "../../Types/types";
import { ZodType, z } from "zod";
import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import musicpng from "../../assets/music.png";
import axios from "axios";
const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [LoginPass, SetloginPass] = useState<string | undefined>(undefined);
  const [LoginEmail, setEmail] = useState<string | undefined>(undefined);
  const checkAuth = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLogin(event.target.checked);
  };
  const schema: ZodType<SchemaTypes> = z
    .object({
      name: z.string().min(3).max(10),
      email: z.string().email(),
      password: z.string().min(4),
      confirmPassword: z.string().min(4),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaTypes>({
    resolver: zodResolver(schema),
  });

  const SignUpSubmission = async (SignUpdata: SchemaTypes) => {
    console.log(SignUpdata);
    const newdata = {
      userName: SignUpdata.name,
      password: SignUpdata.password,
      email: SignUpdata.email,
    };
    console.log(newdata);
    try {
      const request = await axios.post(
        "http://localhost:4500/auth/signup",
        newdata
      );
      console.log(request.data);
    } catch (error) {
      console.log(error);
    }
  };
  const LoginData: LoginTypes = {
    email: LoginEmail,
    password: LoginPass,
  };
  const LoginSubmission = async () => {
    console.log(LoginData);
    const loginRequest = await axios.post(
      "http://localhost:4500/auth/login",
      LoginData
    );
    console.log(loginRequest.data);
  };
  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    // console.log(LoginEmail);
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetloginPass(event.target.value);
  };
  if (isLogin) {
    return (
      <>
        <div className="content h-[100vh] w-[100vw] bg-pink-800 flex justify-center items-center">
          <form
            onSubmit={handleSubmit(LoginSubmission)}
            className="rounded border border-gray-50 bg-white px-[5rem] py-[0rem]"
          >
            {/* Login form fields */}
            {/* ... */}

            <div className="logo flex justify-center">
              <img src={musicpng} alt="musicpng" />
            </div>
            <div className="title text-center text-3xl text-black mb-5 p-0 underline ">
              Login
            </div>

            <div className="email flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                onChange={emailChange}
                className="border-b border-pink-500 focus:border-black focus:outline-0"
              />
              {errors.email && (
                <span className=" text-red-400">{errors.email.message}</span>
              )}
            </div>
            <div className="password flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                onChangeCapture={passwordChange}
                id="password"
                {...register("password")}
                className="border-b border-pink-500 focus:border-black focus:outline-0"
              />
              {errors.password && (
                <span className=" text-red-400">{errors.password.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="my-[2rem] w-[100%] h-[2rem] bg-slate-100 rounded-md mt-8 font-bold hover:bg-blue-900 hover:text-white"
            >
              Login
            </button>
            <div className="switch flex justify-center items-center my-[2rem] gap-3">
              {" "}
              <label className="font-bold" htmlFor="check">
                Login
              </label>{" "}
              <input
                type="checkbox"
                name="check"
                id="check"
                checked={isLogin}
                onChange={checkAuth}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="content h-[100vh] w-[100vw] bg-pink-800 flex justify-center items-center">
        <form
          action=""
          onSubmit={handleSubmit(SignUpSubmission)}
          className=" rounded border border-gray-50 bg-white px-[5rem] py-[0rem]"
        >
          <div className="logo flex justify-center">
            <img src={musicpng} alt="musicpng" />
          </div>
          <div className="title text-center text-3xl text-black mb-5 p-0 underline ">
            Signup
          </div>

          <div className="name flex flex-col">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              {...register("name")}
              className=" border-b border-pink-500 focus:border-black focus:outline-0"
            />
            {errors.name && (
              <span className=" text-red-400">{errors.name.message}</span>
            )}
          </div>

          <div className="email flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              onChange={emailChange}
              className="border-b border-pink-500 focus:border-black focus:outline-0"
            />
            {errors.email && (
              <span className=" text-red-400">{errors.email.message}</span>
            )}
          </div>
          <div className="password flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              onChangeCapture={passwordChange}
              id="password"
              {...register("password")}
              className="border-b border-pink-500 focus:border-black focus:outline-0"
            />
            {errors.password && (
              <span className=" text-red-400">{errors.password.message}</span>
            )}
          </div>

          <div className="ConfirmPassword flex flex-col">
            <label htmlFor="ConfirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="ConfirmPassword"
              {...register("confirmPassword")}
              className="border-b border-pink-500 focus:border-black focus:outline-0"
            />
            {errors.confirmPassword && (
              <span className=" text-red-400">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            // onClick={isLogin? LoginSubmission : SignUpSubmission}
            className=" my-[2rem] w-[100%] h-[2rem] bg-slate-100 rounded-md mt-8 font-bold hover:bg-blue-900 hover:text-white"
          >
            Listen
          </button>

          <div className="switch flex justify-center items-center my-[2rem] gap-3">
            {" "}
            <label className="font-bold" htmlFor="check">
              Login
            </label>{" "}
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={isLogin}
              onChange={checkAuth}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
