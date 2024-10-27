import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ContactDetails() {
  const contact = {
    contact_name: "Jane Smith",
    contact_email: "contact@examplenonprofit.org",
  };

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold">
          Contact Details
        </VuiTypography>
        <VuiTypography variant="button" mt={2}>Contact Name: {contact.contact_name}</VuiTypography>
        <VuiTypography variant="button" mt={2}>Email: {contact.contact_email}</VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default ContactDetails;
