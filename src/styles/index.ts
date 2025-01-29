import { tv } from "tailwind-variants";

export const button = tv({
  base: "flex-1 cursor-pointer rounded-sm px-4 whitespace-nowrap duration-300 hover:ring md:text-base-size md:px-6 md:hover:ring-2",
  variants: {
    color: {
      primary:
        "bg-tertiary-color text-secondary-color hover:text-tertiary-color hover:bg-secondary-color",
    },
  },
});

export const errorMessage = tv({
  base: "text-sm text-primary-color-dark pt-1",
});
