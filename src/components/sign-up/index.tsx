import { SignInAndSignUpBanner } from "../ui/sign-in-and-sign-up-banner";
import { SignUpForm } from "./sign-up-form";

export const SignUp = () => (
  <section className="text-base-color flex min-h-screen w-full flex-col justify-between gap-5 p-5 md:flex-row md:justify-evenly md:gap-10 md:p-20">
    <SignInAndSignUpBanner />
    <SignUpForm />
  </section>
);
