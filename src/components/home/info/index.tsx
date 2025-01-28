import { Form } from "./form";

export const Info = () => (
  <footer className="flex w-full max-w-screen-2xl flex-col gap-4 p-8 pt-0 md:flex-row md:items-center md:justify-between md:gap-4">
    <p className="text-small-size md:text-base-size md:w-1/3">Discover your ideal pet companion, perfectly matched to your unique lifestyle!</p>
    <Form />
  </footer>
);
