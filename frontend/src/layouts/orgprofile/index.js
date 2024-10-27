import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// New components for organization profile
import OrgInfo from "./components/Bill";
import ContactDetails from "./components/orgprofileInformation";
import CauseCategories from "./components/CreditBalance";
import SocialLinks from "./components/Invoice";

function OrgProfile() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <VuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <OrgInfo />
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <SocialLinks />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <ContactDetails />
            </Grid>
            <Grid item xs={12} md={5}>
              <CauseCategories />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default OrgProfile;