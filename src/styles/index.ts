import { tv } from "tailwind-variants";

export const button = tv({
  base: "flex-1 cursor-pointer rounded-sm px-4 whitespace-nowrap duration-300 hover:ring",
  variants: {
    color: {
      primary:
        "bg-tertiary-color text-secondary-color hover:text-tertiary-color hover:bg-secondary-color",
    },
  },
});
