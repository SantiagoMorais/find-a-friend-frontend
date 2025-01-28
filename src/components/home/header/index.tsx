import { Logo } from "@/components/ui/logo";
import { button } from "@/styles";

export const Header = () => (
  <header className="flex flex-col items-center justify-center gap-4 p-5">
    <Logo />
    <nav className="flex flex-col items-center">
      <h2 className="font-bold">For Organizations:</h2>
      <div className="flex justify-between gap-2">
        <button className={button({ color: "primary" })}>Sign In</button>
        <button className={button({ color: "primary" })}>Sign Up</button>
      </div>
    </nav>
  </header>
);
