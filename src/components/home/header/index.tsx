import { Logo } from "@/components/ui/logo";
import { button } from "@/styles";

export const Header = () => (
  <header className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 p-5 md:flex-row md:justify-between md:px-10 md:py-8">
    <Logo />
    <nav className="flex flex-col items-center">
      <h2 className="md:text-small-size font-bold">For Organizations:</h2>
      <div className="flex justify-between gap-2">
        <button className={button({ color: "primary" })}>Sign In</button>
        <button className={button({ color: "primary" })}>Sign Up</button>
      </div>
    </nav>
  </header>
);
