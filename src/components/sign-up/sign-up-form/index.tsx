import {
  registerOrganizationSchema,
  TRegisterOrganization,
} from "@/core/types/handle-register";
import { errorMessage, formInput, formLabel } from "@/styles";
import { handleRegister } from "@/functions/handle-register";
import { routes } from "@/utils/routes";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { productionAmbience } from "@/utils/variables";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterOrganization>({
    resolver: zodResolver(registerOrganizationSchema),
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterOrganization = async (data: TRegisterOrganization) => {
    setIsLoading(true);
    const {
      addressNumber,
      confirmPassword,
      email,
      name,
      owner,
      password,
      whatsApp,
      zipCode,
    } = data;

    try {
      const { error } = await handleRegister({
        addressNumber,
        confirmPassword,
        email,
        name,
        owner,
        password,
        whatsApp,
        zipCode,
      });

      if (error) {
        alert(error);
        return;
      }

      alert("Successfully registered!");
      return redirect("/sign-in");
    } catch (err) {
      if (!productionAmbience) console.error(err);
      alert(err);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-secondary-color flex w-full max-w-xl flex-1 flex-col gap-4 py-10 md:h-full">
      <h2 className="text-base-size md:text-large-size mb-4 text-center leading-none font-bold md:mb-auto">
        Register your organization!
      </h2>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handleRegisterOrganization)}
      >
        <label htmlFor="owner" className={formLabel()}>
          Owners name
          <input
            type="text"
            id="owner"
            placeholder="Ex: John Doe"
            {...register("owner")}
            className={formInput({ type: "common" })}
          />
          {errors.owner && (
            <p className={errorMessage()}>{errors.owner.message}</p>
          )}
        </label>
        <label htmlFor="email" className={formLabel()}>
          Email
          <input
            type="email"
            id="email"
            placeholder="Ex: name@mail.com"
            {...register("email")}
            className={formInput({ type: "common" })}
          />
          {errors.email && (
            <p className={errorMessage()}>{errors.email.message}</p>
          )}
        </label>
        <label htmlFor="name" className={formLabel()}>
          Organization name
          <input
            type="text"
            id="name"
            placeholder="Ex: John Doe"
            {...register("name")}
            className={formInput({ type: "common" })}
          />
          {errors.name && (
            <p className={errorMessage()}>{errors.name.message}</p>
          )}
        </label>
        <label htmlFor="zipCode" className={formLabel()}>
          Zip Code
          <input
            type="number"
            id="zipCode"
            placeholder="Ex: 99998888"
            {...register("zipCode")}
            className={formInput({ type: "common" })}
          />
          {errors.zipCode && (
            <p className={errorMessage()}>{errors.zipCode.message}</p>
          )}
        </label>
        <label htmlFor="addressNumber" className={formLabel()}>
          Address number
          <input
            type="number"
            id="addressNumber"
            placeholder="Ex: 123"
            {...register("addressNumber")}
            className={formInput({ type: "common" })}
          />
          {errors.addressNumber && (
            <p className={errorMessage()}>{errors.addressNumber.message}</p>
          )}
        </label>
        <label htmlFor="whatsApp" className={formLabel()}>
          WhatsApp
          <input
            type="number"
            id="whatsApp"
            placeholder="Ex: 32 988886666"
            {...register("whatsApp")}
            className={formInput({ type: "common" })}
          />
          {errors.whatsApp && (
            <p className={errorMessage()}>{errors.whatsApp.message}</p>
          )}
        </label>
        <label htmlFor="password" className={formLabel()}>
          Password
          <div className="flex w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Ex: Qwe@12"
              {...register("password")}
              className={formInput({ type: "password" })}
            />
            <button
              className="bg-secondary-color/10 border-secondary-color/50 group cursor-pointer rounded-r-md border border-l-0 px-2"
              type="button"
              onClick={() => togglePassword()}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="text-small-size duration-300 group-hover:scale-90 group-hover:opacity-80"
              />
            </button>
          </div>
          {errors.password && (
            <p className={errorMessage()}>{errors.password.message}</p>
          )}
        </label>
        <label htmlFor="confirmPassword" className={formLabel()}>
          confirmPassword
          <div className="flex w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Ex: Qwe@12"
              {...register("confirmPassword")}
              className={formInput({ type: "password" })}
            />
            <button
              className="bg-secondary-color/10 border-secondary-color/50 group cursor-pointer rounded-r-md border border-l-0 px-2"
              type="button"
              onClick={() => togglePassword()}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="text-small-size duration-300 group-hover:scale-90 group-hover:opacity-80"
              />
            </button>
          </div>
          {errors.confirmPassword && (
            <p className={errorMessage()}>{errors.confirmPassword.message}</p>
          )}
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className="text-base-color bg-secondary-color cursor:pointer mt-8 w-full cursor-pointer rounded-lg p-4 text-center font-bold duration-300 hover:scale-95 hover:opacity-80"
        >
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register"}
        </button>
      </form>
      <Link
        to={routes.signIn}
        className="text-secondary-color cursor:pointer w-full rounded-lg p-4 text-center font-bold underline duration-300 hover:scale-95 hover:opacity-80"
      >
        Are you already registered?
      </Link>
    </section>
  );
};
