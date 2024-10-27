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

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap"; // Import GSAP

// @mui material components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signUpImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  useEffect(() => {
    // GSAP animation for the title
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 }, // Starting state
      { duration: 1, y: 0, opacity: 1, ease: "power3.out" } // Ending state
    );
  
    // GSAP animation for buttons with scale effect
    buttonRefs.current.forEach((button, index) => {
      gsap.fromTo(
        button,
        { scale: 0.8, opacity: 0 }, // Starting state
        { 
          duration: 0.5, 
          scale: 1, // Final scale
          opacity: 1, // Final opacity
          delay: index * 0.2 + 0.5, // stagger the button animations
          ease: "back.out(1.7)" // Easing for a bouncy effect
        }
      );
    });
  }, []);

  return (
    <CoverLayout
      title="Welcome to VolunMatch!"
      description="Choose how you would like to sign up to make a difference"
      image={bgSignIn}
    >
      <VuiBox textAlign="center">
        <VuiTypography variant="h5" color="white" mb={4} ref={titleRef}>
          Sign up as:
        </VuiTypography>
        <VuiBox mb={2}>
          {/* Link to volunteer sign-up */}
          <Link to="/authentication/sign-up/VolunteerSignUp" style={{ textDecoration: "none" }}>
            <VuiButton color="info" fullWidth ref={(el) => (buttonRefs.current[0] = el)}>
              Volunteer
            </VuiButton>
          </Link>
        </VuiBox>
        <VuiBox mb={2}>
          {/* Link to organization sign-up */}
          <Link to="/authentication/sign-up/OrganizationSignUp" style={{ textDecoration: "none" }}>
            <VuiButton color="info" fullWidth ref={(el) => (buttonRefs.current[1] = el)}>
              Organization
            </VuiButton>
          </Link>
        </VuiBox>
        <VuiTypography variant="body2" color="white" mt={3}>
          Already have an account?{" "}
          <Link to="/authentication/sign-in" style={{ color: "blue" }}>
            Sign In
          </Link>
        </VuiTypography>
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
