// @mui material components
import Grid from "@mui/material/Grid";
import { Button, Card } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// GSAP
import gsap from "gsap";
import { useEffect, useRef } from "react";

function LandingPage() {
  // Ref variables to target elements for animations
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const aboutRef = useRef();
  const testimonialsRef = useRef();

  useEffect(() => {
    // Animation for title and subtitle
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 50,
      delay: 0.3,
      duration: 1,
      ease: "power3.out",
    });

    // Animation for buttons
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.6,
      duration: 1,
      ease: "power3.out",
    });

    // Animation for About Us section
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 30,
      delay: 1,
      duration: 1,
      ease: "power3.out",
    });

    // Animation for testimonials
    gsap.from(testimonialsRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      delay: 1.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <VuiBox
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Title and subtitle with animation refs */}
      <VuiBox textAlign="center" mb={5} ref={titleRef}>
        <VuiTypography variant="h2" fontWeight="bold" color="white">
          Welcome to VolunMatch
        </VuiTypography>
      </VuiBox>
      <VuiBox textAlign="center" ref={subtitleRef}>
        <VuiTypography variant="h5" mt={2} color="white">
          Empowering Change, One Volunteer at a Time
        </VuiTypography>
      </VuiBox>

      {/* Buttons with animation ref */}
      <VuiBox mt={3} ref={buttonsRef}>
        <Button variant="contained" color="info" href="/authentication/sign-in">
          Get Started
        </Button>
        <Button variant="outlined" color="info" href="/authentication/sign-up" sx={{ ml: 2 }}>
          Sign Up
        </Button>
      </VuiBox>

      {/* About Us section with animation ref */}
      <VuiBox mb={5} textAlign="center" ref={aboutRef}>
        <VuiTypography variant="h4" fontWeight="medium" color="white">
          About Us
        </VuiTypography>
        <VuiTypography variant="body1" maxWidth="600px" mx="auto" mt={2} color="white">
          VolunMatch is a platform designed to connect passionate volunteers with NGOs and
          community initiatives. By matching volunteers based on skills, location, and preferences,
          we strive to make volunteerism accessible, impactful, and fulfilling. Join us in creating
          a network that brings positive change where it's needed most.
        </VuiTypography>
      </VuiBox>

      {/* Testimonials section with animation ref */}
      <VuiBox mb={5} textAlign="center" ref={testimonialsRef}>
        <VuiTypography variant="h4" fontWeight="medium" color="white">
          What Volunteers Are Saying
        </VuiTypography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <VuiTypography variant="body1" italic color="white">
                "Through VolunMatch, I connected with an NGO that perfectly aligned with my passion
                for education. It's incredible to see the difference we're making."
              </VuiTypography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <VuiTypography variant="body1" italic color="white">
                "This platform made finding the right volunteering opportunities so easy. I feel
                empowered knowing my efforts are truly valued."
              </VuiTypography>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default LandingPage;
