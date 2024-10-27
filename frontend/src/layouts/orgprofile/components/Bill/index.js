import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function OrgInfo() {
  // Replace with actual backend data integration
  const organization = {
    org_name: "Example Nonprofit",
    org_url: "https://www.examplenonprofit.org",
    description: "We are dedicated to environmental conservation and education.",
  };

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold">
          {organization.org_name}
        </VuiTypography>
        <VuiTypography variant="button" color="text">
          <a href={organization.org_url} target="_blank" rel="noopener noreferrer">
            {organization.org_url}
          </a>
        </VuiTypography>
        <VuiTypography mt={2}>{organization.description}</VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default OrgInfo;
