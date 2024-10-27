import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { Facebook, Twitter } from "@mui/icons-material";

function SocialLinks({ userData }) {
  const { profile_urls } = userData.user;

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Social Links
        </VuiTypography>
        <VuiBox mt={2} display="flex" flexDirection="column">
          {profile_urls.facebook && (
            <VuiTypography component="a" href={profile_urls.facebook} target="_blank" rel="noopener noreferrer" color="white" display="flex" alignItems="center" mb={1}>
              <Facebook /> Facebook
            </VuiTypography>
          )}
          {profile_urls.twitter && (
            <VuiTypography component="a" href={profile_urls.twitter} target="_blank" rel="noopener noreferrer" color="white" display="flex" alignItems="center">
              <Twitter /> Twitter
            </VuiTypography>
          )}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default SocialLinks;
