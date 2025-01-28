import { SignInBanner } from "./sign-in-banner";
import { SignInForm } from "./sign-in-form";

export const SignIn = () => (
  <section className="p-5 text-base-color flex min-h-screen w-full flex-col items-center justify-between md:justify-evenly md:gap-10 gap-5 md:flex-row md:p-20">
    <SignInBanner />
    <SignInForm />
  </section>
);
