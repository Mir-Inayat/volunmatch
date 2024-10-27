// @mui material components
import Grid from "@mui/material/Grid";
import { Button, Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


function LandingPage() {
  return (
    <VuiBox
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      
    >
      <VuiBox textAlign="center" mb={5}>
        <VuiTypography variant="h2" fontWeight="bold" color="white">
          Welcome to VolunMatch
        </VuiTypography>
        <VuiTypography variant="h5" mt={2} color="white">
          Connect with opportunities to make a difference.
        </VuiTypography>
        <VuiBox mt={3}>
          <Button variant="contained" color="info" href="/authentication/sign-in">
            Get Started
          </Button>
          <Button variant="outlined" color="info" href="/authentication/sign-up" sx={{ ml: 2 }}>
            Sign Up
          </Button>
        </VuiBox>
      </VuiBox>

      <VuiBox mb={5} textAlign="center">
        <VuiTypography variant="h4" fontWeight="medium" color="white">
          About Us
        </VuiTypography>
        <VuiTypography variant="body1" maxWidth="600px" mx="auto" mt={2} color="white">
          VolunMatch is an AI-driven platform designed to connect volunteers with organizations based on their skills, location, and preferences. We aim to streamline the volunteer engagement process, making it easier for both individuals and organizations to find the perfect match.
        </VuiTypography>
      </VuiBox>

      <VuiBox mb={5} textAlign="center">
        <VuiTypography variant="h4" fontWeight="medium" color="white">
          What People Are Saying
        </VuiTypography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <VuiTypography variant="body1" italic color="white">
                "VolunMatch helped me find the perfect volunteering opportunity that matched my skills!"
              </VuiTypography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <VuiTypography variant="body1" italic color="white">
                "This platform made it so easy to connect with organizations looking for volunteers."
              </VuiTypography>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default LandingPage;
