import { useState, useEffect, useRef } from "react"; // Add useRef and useEffect
import { Link } from "react-router-dom";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import GradientBorder from "examples/GradientBorder";
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgSignIn from "assets/images/signInImage.png";
import { gsap } from "gsap"; // Import GSAP

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const buttonsRef = useRef(null); // Create a ref for the buttons

  // Animate buttons on mount
  useEffect(() => {
    const buttons = buttonsRef.current.children; // Get button elements
    const tl = gsap.timeline();

    for (let i = 0; i < buttons.length; i++) {
      tl.fromTo(buttons[i], { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, `+=0.25`); // 0.25 seconds delay
    }
  }, []);

  return (
    <CoverLayout
      title="Welcome!"
      description="Choose how you would like to sign in"
      image={bgSignIn}
    >
      <VuiBox textAlign="center">
        <VuiTypography variant="h5" color="white" mb={4}>
          Sign in as:
        </VuiTypography>

        <VuiBox mb={2} ref={buttonsRef}> {/* Add ref to this box for animation */}
          {/* Link to volunteer sign-in */}
          <Link to="/authentication/sign-in/VolunteerSignIn" style={{ textDecoration: "none" }}>
            <VuiButton color="info" fullWidth>
              Volunteer
            </VuiButton>
          </Link>
        </VuiBox>

        <VuiBox>
          {/* Link to organization sign-in */}
          <Link to="/authentication/sign-in/OrganizationSignIn" style={{ textDecoration: "none" }}>
            <VuiButton color="info" fullWidth>
              Organization
            </VuiButton>
          </Link>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
