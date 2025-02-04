import { SignOutButton } from "@/components/ui/sign-out-button";
import { THandleOrganizationProfile } from "@/core/types/handle-organization-profile";
import { handleOrganizationProfile } from "@/functions/handle-organization-profile";
import { button } from "@/styles";
import { useEffect, useState } from "react";

export const NotLoggedButtons = () => {
  const [orgData, setOrgData] = useState<THandleOrganizationProfile | null>(
    null
  );

  useEffect(() => {
    const handleGetOrgData = async () => {
      const organizationResponse = await handleOrganizationProfile();
      if (organizationResponse) setOrgData(organizationResponse);
    };

    handleGetOrgData();
  }, [orgData]);

  return (
    <>
      <h2 className="md:text-small-size font-bold">
        Welcome, {orgData?.organization.name}!
      </h2>
      <div className="flex justify-between gap-2">
        <button className={button({ color: "primary" })}>Register pets</button>
        <SignOutButton />
      </div>
    </>
  );
};
