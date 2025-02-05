import { ReturnButton } from "../ui/return-button";
import { SignInAndSignUpBanner } from "../ui/sign-in-and-sign-up-banner";
import { SignInForm } from "./sign-in-form";

export const SignIn = () => (
  <section className="text-base-color flex min-h-screen w-full flex-col items-center justify-between gap-5 p-5 md:flex-row md:justify-evenly md:gap-10 md:p-20">
    <ReturnButton />
    <SignInAndSignUpBanner />
    <SignInForm />
  </section>
);
