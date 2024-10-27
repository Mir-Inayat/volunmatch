import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import burceMars from "assets/images/avatar-simmmple.png";
import breakpoints from "assets/theme/base/breakpoints";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useEffect, useState } from "react";

function Header() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    preferences: "",
    socialMedia: "",
    profileURL: "",
  });

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = {
      fullName: localStorage.getItem("fullName"),
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      skills: localStorage.getItem("skills"),
      availability: localStorage.getItem("availability"),
      preferences: localStorage.getItem("preferences"),
      socialMedia: localStorage.getItem("socialMedia"),
      profileURL: localStorage.getItem("profileURL"),
    };
    setUserData(storedUserData);
  }, []);

  return (
    <VuiBox position="relative">
      <Card
        sx={{
          px: 3,
          mt: 2,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              gap: "16px",
            },
            [breakpoints.up("xs")]: {
              gap: "0px",
            },
            [breakpoints.up("xl")]: {
              gap: "0px",
            },
          })}
        >
          <Grid
            item
            xs={12}
            md={1.7}
            lg={1.5}
            xl={1.2}
            xxl={0.8}
            display="flex"
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                justifyContent: "center",
                alignItems: "center",
              },
            })}
          >
            <VuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item xs={12} md={4.3} lg={4} xl={3.8} xxl={7}>
            <VuiBox
              height="100%"
              mt={0.5}
              lineHeight={1}
              display="flex"
              flexDirection="column"
              sx={({ breakpoints }) => ({
                [breakpoints.only("sm")]: {
                  justifyContent: "center",
                  alignItems: "center",
                },
              })}
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Nice to see you, {userData.fullName}!
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {userData.email}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Skills: {userData.skills}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Phone: {userData.phone}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Availability: {userData.availability}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Preferences: {userData.preferences}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Social Media Links: {userData.socialMedia}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Profile URL: {userData.profileURL}
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
