import React from 'react';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function NGO({ name, description, orgType, causeCategories, contactName, contactEmail, link }) {
  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="h5" color="white" mb={2}>
          {name}
        </VuiTypography>
        <VuiTypography variant="body2" color="text" mb={2}>
          {description}
        </VuiTypography>
        <VuiTypography variant="body2" color="text" mb={1}>
          Type: {orgType}
        </VuiTypography>
        <VuiTypography variant="body2" color="text" mb={1}>
          Causes: {causeCategories.join(', ')}
        </VuiTypography>
        <VuiTypography variant="body2" color="text" mb={1}>
          Contact: {contactName} ({contactEmail})
        </VuiTypography>
        <VuiBox mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Button
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
          >
            Visit Website
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => alert(`Donate to ${name}`)} // Replace with actual donation logic
          >
            Donate
          </Button>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default NGO;
