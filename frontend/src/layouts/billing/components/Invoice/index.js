import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function CauseCategories() {
  const causes = ["Conservation", "Education"];

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="lg" fontWeight="bold">Cause Categories</VuiTypography>
        {causes.map((cause, index) => (
          <VuiTypography key={index} variant="button" mt={1}>
            - {cause}
          </VuiTypography>
        ))}
      </VuiBox>
    </Card>
  );
}

export default CauseCategories;
