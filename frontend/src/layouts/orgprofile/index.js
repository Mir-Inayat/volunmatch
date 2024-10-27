import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axiosInstance from '../../axiosConfig';

// New components for organization profile
import OrgInfo from "./components/OrgInfo";
import ContactDetails from "./components/ContactDetails";
import CauseCategories from "./components/CauseCategories";
import SocialLinks from "./components/SocialLinks";

function OrgProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/orgprofile')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organization data:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        {userData && (
          <>
            <VuiBox mb={1.5}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={7} xl={8}>
                  <OrgInfo userData={userData} />
                </Grid>
                <Grid item xs={12} lg={5} xl={4}>
                  <SocialLinks userData={userData} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox my={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <ContactDetails userData={userData} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <CauseCategories userData={userData} />
                </Grid>
              </Grid>
            </VuiBox>
          </>
        )}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrgProfile;
