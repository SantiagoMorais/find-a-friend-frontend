import { routes } from "@/utils/routes";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="text-secondary-color flex w-full max-w-xl flex-1 flex-col gap-4 py-10 md:h-full">
      <h2 className="text-large-size md:text-extra-large-size mb-4 font-bold md:mb-auto md:flex-1">
        Welcome!
      </h2>
      <form className="flex w-full flex-col gap-4">
        <label htmlFor="signInEmail" className="flex flex-col gap-2 font-bold">
          Email
          <input
            type="text"
            name="signInEmail"
            id="signInEmail"
            className="border-secondary-color/50 text-secondary-color bg-secondary-color/10 w-full rounded-md border px-2 py-1 font-normal md:p-4"
            placeholder="i.love.pets@mail.com"
          />
        </label>
        <label htmlFor="signInEmail" className="flex flex-col gap-2 font-bold">
          Password
          <div className="flex w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="signInPassword"
              id="signInPassword"
              className="border-secondary-color/50 text-secondary-color bg-secondary-color/10 w-full rounded-l-md border border-r-0 px-2 py-1 font-normal md:p-4"
              placeholder="Password"
            />
            <button className="bg-secondary-color/10 border-secondary-color/50 group cursor-pointer rounded-r-md border border-l-0 px-2">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-small-size duration-300 group-hover:scale-90 group-hover:opacity-80"
              />
            </button>
          </div>
        </label>
        <button
          type="button"
          onClick={() => togglePassword()}
          className="text-base-color bg-secondary-color cursor:pointer mt-8 w-full cursor-pointer rounded-lg p-4 text-center font-bold duration-300 hover:scale-95 hover:opacity-80"
        >
          Login
        </button>
      </form>
      <Link
        to={routes.signUp}
        className="text-secondary-color bg-secondary-color/20 cursor:pointer w-full rounded-lg p-4 text-center font-bold duration-300 hover:scale-95 hover:opacity-80"
      >
        Register my organization
      </Link>
    </section>
  );
};
