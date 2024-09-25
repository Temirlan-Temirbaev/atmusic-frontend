"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRegistration } from "@/entities/user";
import UIInput from "@/shared/ui/UI-Input";
import UIButton from "@/shared/ui/UI-Button";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { UIUploadFile } from "@/shared/ui";

interface RegisterFormInputs {
  mail: string;
  password: string;
  nickname: string;
  avatar?: File;
}

const RegisterForm = () => {
  const methods = useForm<RegisterFormInputs>({
    defaultValues: { avatar: undefined },
  });
  const { register, handleSubmit, formState: { errors } } = methods;
  const { mutate: registerMutate } = useRegistration();

  const refs = {
    container: useRef<HTMLFormElement | null>(null),
    title: useRef<HTMLHeadingElement | null>(null),
    email: useRef<HTMLDivElement | null>(null),
    nickname: useRef<HTMLDivElement | null>(null),
    password: useRef<HTMLDivElement | null>(null),
    avatar: useRef<HTMLDivElement | null>(null),
    registerBtn: useRef<HTMLDivElement | null>(null),
    register: useRef<HTMLDivElement | null>(null),
  };

  useGSAP(() => {
    const elements = [
      refs.title.current,
      refs.email.current,
      refs.nickname.current,
      refs.password.current,
      refs.avatar.current,
      refs.registerBtn.current,
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
  }, { scope: refs.container });

  const onSubmit = (data: RegisterFormInputs) => registerMutate(data);

  return (
    <FormProvider {...methods}>
      <form
        ref={refs.container}
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-y-[30px] items-center justify-center max-w-[350px]"
      >
        <h1 ref={refs.title} className="font-bold text-white text-4xl">Registration</h1>
        <div ref={refs.nickname}>
          <UIInput
            className="w-[350px]"
            label={"Nickname"}
            name="Nickname"
            error={errors.nickname}
            register={() => register('nickname', {
              required: "This field is required!",
            })}
          />
        </div>
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
        <div className="w-full" ref={refs.avatar}>
          <UIUploadFile name="avatar" label="Upload Avatar ( Optional )" />
        </div>
        <div ref={refs.registerBtn}>
          <UIButton
            className="w-[350px] rounded-[10px] h-[50px] bg-primary_pink hover:bg-transparent hover:border-2 hover:border-primary_pink delay-50 transition-all ease-linear"
            type="submit"
          >
            <p className="text-xl text-white font-regular">Register</p>
          </UIButton>
        </div>
        <p ref={refs.register} className="text-white text-xl">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary_pink hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
