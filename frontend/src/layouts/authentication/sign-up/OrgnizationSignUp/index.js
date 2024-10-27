import { useState, useEffect, useRef } from "react"; // Add useRef and useEffect
import { Link, useHistory } from "react-router-dom";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgSignIn from "assets/images/signInImage.png";
import axios from "axios";
import { gsap } from "gsap"; // Import GSAP

function OrganizationSignUp() {
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // Updated formData structure
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    org_name: "",
    org_url: "",
    description: "",
    profile_urls: {},
    contact_name: "",
    contact_email: "",
    org_type: "",
    cause_categories: [],
  });

  const formRef = useRef(null); // Create a ref for the form fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profile_urls") {
      setFormData({
        ...formData,
        profile_urls: {
          ...formData.profile_urls,
          [value.split(',')[0]]: value.split(',')[1],
        },
      });
    } else if (name === "cause_categories") {
      setFormData({
        ...formData,
        [name]: value.split(',').map(item => item.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/organization/signup`, formData);
      console.log('Signup successful:', response.data);
      // Redirect to the profile page after successful signup
      history.push('/billing');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  // Animate fields on mount
  useEffect(() => {
    const fields = formRef.current.children; // Get form fields
    const tl = gsap.timeline();

    for (let i = 0; i < fields.length; i++) {
      tl.fromTo(fields[i], { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, `+=0.25`); // 0.25 seconds delay
    }
  }, []);

  return (
    <CoverLayout
      title="Welcome, Organization!"
      color="white"
      description="Enter your organization's details to sign up"
      premotto="INSPIRED BY THE FUTURE:"
      motto="THE Vision ui DASHBOARD"
      image={bgSignIn}
    >
      <VuiBox ref={formRef} component="form" role="form" onSubmit={handleSubmit}>
        {/* Email */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Email
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="email"
              name="email"
              placeholder="Your email..."
              value={formData.email}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Password */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Password
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="password"
              name="password"
              placeholder="Your password..."
              value={formData.password}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Organization Name */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Organization Name
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="org_name"
              placeholder="Official organization name..."
              value={formData.org_name}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Organization URL */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Organization URL
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="url"
              name="org_url"
              placeholder="Website link (if available)..."
              value={formData.org_url}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Description */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Description
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="description"
              placeholder="What your organization does..."
              value={formData.description}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Profile URLs */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Profile URLs
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="profile_urls"
              placeholder="Platform,URL (comma-separated pairs)..."
              value={Object.entries(formData.profile_urls).map(([k, v]) => `${k},${v}`).join('; ')}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Contact Name */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Contact Name
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="contact_name"
              placeholder="Your contact name..."
              value={formData.contact_name}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Contact Email */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Contact Email
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="email"
              name="contact_email"
              placeholder="Your contact email..."
              value={formData.contact_email}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Organization Type */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Organization Type
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="org_type"
              placeholder="Type of organization..."
              value={formData.org_type}
              onChange={handleChange}
              required
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Cause Categories */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Cause Categories
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="100%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              name="cause_categories"
              placeholder="Categories (comma-separated)..."
              value={formData.cause_categories.join(', ')}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Remember Me */}
        <VuiBox mb={2}>
          <VuiSwitch checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            component="span"
            variant="button"
            color="white"
            fontWeight="medium"
            ml={1}
          >
            Remember me
          </VuiTypography>
        </VuiBox>

        {/* Submit Button */}
        <VuiBox mb={2}>
          <VuiButton type="submit" variant="gradient" color="info" fullWidth>
            Sign Up
          </VuiButton>
        </VuiBox>

        <VuiBox mt={3} textAlign="center">
          <VuiTypography variant="button" color="white">
            Already have an account?{" "}
            <Link to="/authentication/sign-in">
              <VuiTypography
                variant="button"
                color="info"
                fontWeight="medium"
              >
                Sign In
              </VuiTypography>
            </Link>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default OrganizationSignUp;
