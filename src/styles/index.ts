import { tv } from "tailwind-variants";

export const button = tv({
  base: "flex-1 cursor-pointer rounded-sm px-4 whitespace-nowrap duration-300 hover:ring md:text-base-size md:px-6 md:hover:ring-2",
  variants: {
    color: {
      primary:
        "bg-tertiary-color text-secondary-color hover:text-tertiary-color hover:bg-secondary-color",
      secondary:
        "bg-secondary-color text-tertiary-color hover:text-secondary-color hover:bg-tertiary-color",
    },
  },
});

export const errorMessage = tv({
  base: "text-sm text-primary-color-dark pt-1",
});

export const formInput = tv({
  base: "border-secondary-color/50 text-secondary-color bg-secondary-color/10 w-full border px-2 py-1 font-normal md:p-4",
  variants: {
    type: {
      common: "rounded-md",
      password: "rounded-l-md border-r-0",
    },
  },
});

export const formLabel = tv({
  base: "flex flex-col gap-2 font-bold",
});
