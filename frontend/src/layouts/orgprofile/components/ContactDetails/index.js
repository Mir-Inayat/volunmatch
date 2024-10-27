import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ContactDetails({ userData }) {
  const { contact_name, contact_email } = userData.user;

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Contact Details
        </VuiTypography>
        <VuiTypography mt={2} color="white">Name: {contact_name}</VuiTypography>
        <VuiTypography color="white">Email: {contact_email}</VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default ContactDetails;
