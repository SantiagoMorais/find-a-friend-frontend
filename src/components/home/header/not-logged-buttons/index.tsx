import { SignOutButton } from "@/components/ui/sign-out-button";

export const NotLoggedButtons = () => {
  // collect organization data logic
  return (
    <>
      <h2 className="md:text-small-size font-bold">lorem ipsum</h2>
      <div className="flex justify-between gap-2">
        <SignOutButton />
      </div>
    </>
  );
};
