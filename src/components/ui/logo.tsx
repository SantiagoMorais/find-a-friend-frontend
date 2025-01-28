import logo from "@/assets/imgs/logo.png";

export const Logo = () => (
  <figure className="flex items-center gap-2 text-base-color">
    <img src={logo} alt="Logo" className="size-10 invert brightness-0"/>
    <h1 className="font-bold text-small-size">FindAFriend</h1>
  </figure>
);
