import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function CauseCategories({ userData }) {
  const { cause_categories } = userData.user;

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Cause Categories
        </VuiTypography>
        <VuiBox mt={2}>
          {cause_categories.map((category, index) => (
            <VuiTypography key={index} color="white">
              • {category}
            </VuiTypography>
          ))}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default CauseCategories;
