/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";
import { useState, useEffect } from "react";
import axios from "axios";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import axiosInstance from '../../axiosConfig'; 

function Overview() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axiosInstance.get('/api/profile')
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  return (
    <DashboardLayout>
      <Header 
        name={userData?.name}
        email={userData?.email}
        skills={userData?.skills}
        phone={userData?.phone_number}
        availability={userData?.availability}
      />
      <VuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {/* Welcome Component */}
          <Grid item xs={12} xl={4}>
            <Welcome name={userData?.name} bio={userData?.bio} />
          </Grid>
          {/* Profile Information */}
          <Grid item xs={12} xl={3}>
            {userData && (
              <ProfileInfoCard
                title="Profile Information"
                description={userData.bio}
                info={{
                  fullName: userData.name,
                  mobile: userData.phone_number,
                  email: userData.email,
                  location: "United States", // Placeholder if location isn't in user data
                }}
                social={[
                  {
                    link: userData.profile_urls?.linkedin,
                    icon: <LinkedInIcon />,
                    color: "linkedin",
                  },
                  {
                    link: userData.profile_urls?.github,
                    icon: <GitHubIcon />,
                    color: "github",
                  },
                ]}
              />
            )}
          </Grid>
          {/* Availability and Skills */}
          <Grid item xs={12} xl={5}>
            {userData && (
              <Card>
                <VuiBox p={2}>
                  <VuiTypography variant="h6" mb={2}>Skills</VuiTypography>
                  <VuiBox mb={2}>
                    {userData.skills && userData.skills.map((skill, index) => (
                      <VuiTypography key={index} variant="button" fontWeight="regular" color="text">
                        {skill}{index < userData.skills.length - 1 ? ', ' : ''}
                      </VuiTypography>
                    ))}
                  </VuiBox>
                  <VuiTypography variant="h6" mb={2}>Availability</VuiTypography>
                  {userData.availability && Object.entries(userData.availability).map(([day, times]) => (
                    <VuiBox key={day} mb={1}>
                      <VuiTypography variant="button" fontWeight="medium" color="text">
                        {day}:
                      </VuiTypography> 
                      {Object.entries(times).map(([time, available]) => (
                        <VuiTypography key={time} variant="button" fontWeight="regular" color="text" ml={1}>
                          {time}: {available ? "Available" : "Not Available"}
                        </VuiTypography>
                      ))}
                    </VuiBox>
                  ))}
                </VuiBox>
              </Card>
            )}
          </Grid>
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Overview;