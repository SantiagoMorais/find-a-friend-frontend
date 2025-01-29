import { Logo } from "@/components/ui/logo";
import banner from "@/assets/imgs/hero.webp";

export const SignInAndSignUpBanner = () => (
  <section className="bg-primary-color flex flex-col items-center gap-8 rounded-2xl p-5 pt-10 md:h-full md:justify-between md:pt-20 max-h-[720px] min-h-fit">
    <Logo />
    <img src={banner} alt="hero image" className="w-full md:max-w-[35dvw]" />
  </section>
);
