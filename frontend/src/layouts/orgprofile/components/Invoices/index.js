/*!
=========================================================
* QuadConquerors - v1.0.0
=========================================================

* Copyright 2024 QuadConquerors (https://www.quadconquerors.com)
* Licensed under MIT (https://github.com/quadconquerors/license/blob/main/LICENSE.md)

* Coded by QuadConquerors

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput";

function CreateOpportunity() {
  return (
    <Card id="create-opportunity" sx={{ height: "100%" }}>
      <VuiBox mb="28px">
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Creating an opportunity
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="form" display="flex" flexDirection="column" gap={2}>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Title of event
            </VuiTypography>
            <VuiInput placeholder="Enter event title" />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Description of event
            </VuiTypography>
            <VuiInput placeholder="Enter event description" multiline rows={3} />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Duration/dates
            </VuiTypography>
            <VuiInput placeholder="Enter duration or dates" />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Location of the event
            </VuiTypography>
            <VuiInput placeholder="Enter event location" />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Required skills (if any)
            </VuiTypography>
            <VuiInput placeholder="Enter required skills" />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Prizes
            </VuiTypography>
            <VuiInput placeholder="Enter prizes" />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="medium" mb={1}>
              Additional information
            </VuiTypography>
            <VuiInput placeholder="Enter any additional information" />
          </VuiBox>
          <VuiButton variant="contained" color="info" type="submit">
            SUBMIT
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default CreateOpportunity;
