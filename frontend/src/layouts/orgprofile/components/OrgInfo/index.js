import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Grid from "@mui/material/Grid";

function OrgInfo({ userData }) {
  // Destructure the user data from props
  const { 
    org_name, 
    org_url, 
    description, 
    org_type, 
    cause_categories, 
    contact_name, 
    contact_email 
  } = userData.user;

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="h3" fontWeight="bold" color="white" mb={2}>
          {org_name}
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular" mb={2}>
          <a href={org_url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            {org_url}
          </a>
        </VuiTypography>
        <VuiTypography variant="body2" color="text" mb={3}>
          {description}
        </VuiTypography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <VuiTypography variant="h6" color="white" fontWeight="medium" mb={1}>
              Organization Type
            </VuiTypography>
            <VuiTypography variant="body2" color="text" mb={2}>
              {org_type}
            </VuiTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <VuiTypography variant="h6" color="white" fontWeight="medium" mb={1}>
              Cause Categories
            </VuiTypography>
            <VuiTypography variant="body2" color="text" mb={2}>
              {cause_categories.join(", ")}
            </VuiTypography>
          </Grid>
        </Grid>
        
        <VuiBox mt={3}>
          <VuiTypography variant="h6" color="white" fontWeight="medium" mb={1}>
            Contact Information
          </VuiTypography>
          <VuiTypography variant="body2" color="text">
            {contact_name}
          </VuiTypography>
          <VuiTypography variant="body2" color="text">
            {contact_email}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default OrgInfo;
