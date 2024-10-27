import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button"; // Add button from MUI

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "project", align: "left" },
    { name: "organization", align: "left" }, // Added organization column
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" }, // This will have a Volunteer button
  ],

  rows: [
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <AdobeXD size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Chakra Vision UI Version
          </VuiTypography>
        </VuiBox>
      ),
      organization: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Adobe
        </VuiTypography>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $14,000
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action: (
        <Button variant="contained" color="primary" size="small">
          Volunteer
        </Button>
      ), // Added a Volunteer button
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Atlassian size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add Progress Track
          </VuiTypography>
        </VuiBox>
      ),
      organization: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Atlassian
        </VuiTypography>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $3,000
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action: (
        <Button variant="contained" color="primary" size="small">
          Volunteer
        </Button>
      ),
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Slack size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Fix Platform Errors
          </VuiTypography>
        </VuiBox>
      ),
      organization: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Slack
        </VuiTypography>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Not set
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      completion: <Completion value={30} color="info" />,
      action: (
        <Button variant="contained" color="primary" size="small">
          Volunteer
        </Button>
      ),
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Launch our Mobile App
          </VuiTypography>
        </VuiBox>
      ),
      organization: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Spotify
        </VuiTypography>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      completion: <Completion value={0} color="info" />,
      action: (
        <Button variant="contained" color="primary" size="small">
          Volunteer
        </Button>
      ),
    },
    {
      project: (
        <VuiBox display="flex" alignItems="center">
          <Jira size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add the New Pricing Page
          </VuiTypography>
        </VuiBox>
      ),
      organization: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Jira
        </VuiTypography>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action: (
        <Button variant="contained" color="primary" size="small">
          Volunteer
        </Button>
      ),
    },
  ],
};
