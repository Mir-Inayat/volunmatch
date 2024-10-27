import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function SocialLinks() {
  const profile_urls = {
    facebook: "https://www.facebook.com/examplenonprofit",
    twitter: "https://twitter.com/examplenonprofit",
  };

  return (
    <VuiBox>
      <VuiTypography component="a" href={profile_urls.facebook} target="_blank">
        <FacebookIcon />
      </VuiTypography>
      <VuiTypography component="a" href={profile_urls.twitter} target="_blank">
        <TwitterIcon />
      </VuiTypography>
    </VuiBox>
  );
}

export default SocialLinks;
