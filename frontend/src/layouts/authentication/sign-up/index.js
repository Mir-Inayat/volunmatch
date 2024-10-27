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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import rgba from "assets/theme/functions/rgba";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signUpImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome!"
      description="Choose how you would like to sign up"
      image={bgSignIn}
    >
      <VuiBox textAlign="center">
        <VuiTypography variant="h5" color="white" mb={4}>
          Sign up as:
        </VuiTypography>
        <VuiBox mb={2}>
          {/* Link to volunteer sign-up */}
          <Link to="/authentication/sign-up/VolunteerSignUp" style={{ textDecoration: "none" }}>
            <VuiButton color="info" fullWidth>
              Volunteer
            </VuiButton>
          </Link>
        </VuiBox>
        <VuiBox>
          {/* Link to organization sign-up */}
          <Link to="/authentication/sign-up/OrganizationSignUp" style={{ textDecoration: "none" }}>
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
