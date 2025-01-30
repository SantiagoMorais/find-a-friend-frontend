import { useAuth } from "@/contexts/auth-context";
import { TLogin, loginSchema } from "@/core/types/handle-login";
import { errorMessage } from "@/styles";
import { handleLogin } from "@/utils/handle-login";
import { routes } from "@/utils/routes";
import { faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginOrganization = async (data: TLogin) => {
    setIsLoading(true);
    const { email, password } = data;
    const { error, token } = await handleLogin({
      email,
      password,
    });

    if (error || !token) {
      alert(error);
      setIsLoading(false);
      return;
    }

    setToken(token);
    alert("Successfully logged.");
    setIsLoading(false);
    return redirect("/");
  };

  return (
    <section className="text-secondary-color flex w-full max-w-xl flex-1 flex-col gap-4 py-10 md:h-full">
      <h2 className="text-large-size md:text-extra-large-size mb-4 font-bold md:mb-auto md:flex-1">
        Welcome!
      </h2>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleLoginOrganization)}
      >
        <label htmlFor="signInEmail" className="flex flex-col gap-2 font-bold">
          Email
          <input
            type="text"
            id="signInEmail"
            className="border-secondary-color/50 text-secondary-color bg-secondary-color/10 w-full rounded-md border px-2 py-1 font-normal md:p-4"
            placeholder="i.love.pets@mail.com"
            {...register("email")}
          />
          {errors.email && (
            <p className={errorMessage()}>{errors.email.message}</p>
          )}
        </label>
        <label htmlFor="signInEmail" className="flex flex-col gap-2 font-bold">
          Password
          <div className="flex w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="signInPassword"
              className="border-secondary-color/50 text-secondary-color bg-secondary-color/10 w-full rounded-l-md border border-r-0 px-2 py-1 font-normal md:p-4"
              placeholder="Password"
              {...register("password")}
            />
            <button
              className="bg-secondary-color/10 border-secondary-color/50 group cursor-pointer rounded-r-md border border-l-0 px-2"
              type="button"
              onClick={() => togglePassword()}
            >
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-small-size duration-300 group-hover:scale-90 group-hover:opacity-80"
              />
            </button>
          </div>
          {errors.password && (
            <p className={errorMessage()}>{errors.password.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="text-base-color bg-secondary-color cursor:pointer mt-8 w-full cursor-pointer rounded-lg p-4 text-center font-bold duration-300 hover:scale-95 hover:opacity-80"
        >
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
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
