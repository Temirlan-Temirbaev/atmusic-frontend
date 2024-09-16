"use client";
import {useForm} from "react-hook-form";
import {useLogin} from "@/entities/user";
import UIInput from "@/shared/ui/UI-Input";
import UIButton from "@/shared/ui/UI-Button";
import GoogleIcon from "@/../public/icons/google_icon.svg";
import Link from "next/link";
import {useRef, useCallback} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

interface LoginFormInputs {
  mail: string;
  password: string;
}

const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>();
  const {mutate: login} = useLogin();

  const refs = {
    container: useRef<HTMLFormElement | null>(null),
    title: useRef<HTMLHeadingElement | null>(null),
    email: useRef<HTMLDivElement | null>(null),
    password: useRef<HTMLDivElement | null>(null),
    loginBtn: useRef<HTMLDivElement | null>(null),
    paragraph: useRef<HTMLDivElement | null>(null),
    googleBtn: useRef<HTMLDivElement | null>(null),
    register: useRef<HTMLDivElement | null>(null),
  };

  useGSAP(() => {
    const elements = [
      refs.title.current,
      refs.email.current,
      refs.password.current,
      refs.loginBtn.current,
      refs.paragraph.current,
      refs.googleBtn.current,
      refs.register.current
    ];

    gsap.from(elements.filter(Boolean), {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.1,
    });
  }, {scope: refs.container});

  const handleGoogleLogin = useCallback(() => {
    location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  }, []);

  const onSubmit = (data: LoginFormInputs) => login(data);

  return (
    <form
      ref={refs.container}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-[30px] items-center justify-center max-w-[350px]"
    >
      <h1 ref={refs.title} className="font-bold text-white text-4xl">Log In</h1>

      <div ref={refs.email}>
        <UIInput
          className="w-[350px]"
          label={"Email"}
          name="Email"
          error={errors.mail}
          register={() => register('mail', {
            required: "This field is required!",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Incorrect email!"
            }
          })}
        />
      </div>

      <div ref={refs.password}>
        <UIInput
          label={"Password"}
          className="w-[350px]"
          name="Password"
          type="password"
          error={errors.password}
          register={() => register('password', {
            required: "This field is required!",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters!"
            }
          })}
        />
      </div>

      <div ref={refs.loginBtn}>
        <UIButton
          className="w-[350px] rounded-[10px] h-[50px] bg-primary_pink hover:bg-transparent hover:border-2 hover:border-primary_pink delay-50 transition-all ease-linear"
          type="submit"
        >
          <p className="text-xl text-white font-regular">Log In</p>
        </UIButton>
      </div>

      <div ref={refs.paragraph} className="flex items-center w-full gap-x-1">
        <div className="w-1/2 h-[3px] bg-gray10 opacity-20"></div>
        <p className="text-white opacity-60 text-xl">OR</p>
        <div className="w-1/2 h-[3px] bg-gray10 opacity-20"></div>
      </div>

      <div
        ref={refs.googleBtn}
        onClick={handleGoogleLogin}
        className="flex justify-center items-center w-full h-[60px] bg-gray10 bg-opacity-10 rounded-[10px] border-white border-[1px] border-opacity-20 cursor-pointer"
      >
        <GoogleIcon className="w-9 h-9 mr-1"/>
        <p className="text-xl text-white">Log In With Google</p>
      </div>

      <p ref={refs.register} className="text-white text-xl">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-primary_pink hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
