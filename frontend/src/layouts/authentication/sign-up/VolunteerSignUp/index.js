import { useState } from "react";
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
import bgSignIn from "assets/images/signUpImage.png";
import axios from "axios";

function VolunteerSignUp() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // State for the form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    profile_picture: "",
    skills: [],
    availability: {},
    profile_urls: {},
    bio: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) });
  };

  const handleAvailabilityChange = (e) => {
    const [day, time] = e.target.name.split('_');
    setFormData({
      ...formData,
      availability: {
        ...formData.availability,
        [day]: { ...formData.availability[day], [time]: e.target.checked }
      }
    });
  };

  const handleProfileUrlsChange = (e) => {
    const [platform, url] = e.target.value.split(':');
    setFormData({
      ...formData,
      profile_urls: { ...formData.profile_urls, [platform.trim()]: url.trim() }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/volunteer/signup`, formData);
      console.log("Signup successful:", response.data);
      // Assuming the API returns user data
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // Redirect to profile page
      history.push("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during signup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CoverLayout
      title="Welcome, Volunteer!"
      description="Enter your details to sign up"
      image={bgSignIn}
    >
      <VuiBox component="form" role="form" onSubmit={handleSubmit}>
        
        {/* Name */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Full Name
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
              name="name"
              placeholder="Your full name..."
              value={formData.name}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

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
              placeholder="Your email address..."
              value={formData.email}
              onChange={handleChange}
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
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Phone */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Phone
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
              type="tel"
              name="phone_number"
              placeholder="Your phone number..."
              value={formData.phone_number}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Skills */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Skills
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
              name="skills"
              placeholder="Your skills (comma-separated)..."
              value={formData.skills.join(', ')}
              onChange={handleSkillsChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Availability */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Availability
            </VuiTypography>
          </VuiBox>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <VuiBox key={day} display="flex" alignItems="center" mb={1}>
              <VuiTypography variant="button" fontWeight="regular" color="text" sx={{ minWidth: '100px' }}>
                {day}:
              </VuiTypography>
              <VuiBox display="flex">
                <VuiSwitch
                  name={`${day.toLowerCase()}_morning`}
                  checked={formData.availability[day.toLowerCase()]?.morning || false}
                  onChange={handleAvailabilityChange}
                />
                <VuiTypography variant="button" fontWeight="regular" color="text" sx={{ mx: 1 }}>
                  Morning
                </VuiTypography>
                <VuiSwitch
                  name={`${day.toLowerCase()}_afternoon`}
                  checked={formData.availability[day.toLowerCase()]?.afternoon || false}
                  onChange={handleAvailabilityChange}
                />
                <VuiTypography variant="button" fontWeight="regular" color="text" sx={{ mx: 1 }}>
                  Afternoon
                </VuiTypography>
                <VuiSwitch
                  name={`${day.toLowerCase()}_evening`}
                  checked={formData.availability[day.toLowerCase()]?.evening || false}
                  onChange={handleAvailabilityChange}
                />
                <VuiTypography variant="button" fontWeight="regular" color="text" sx={{ ml: 1 }}>
                  Evening
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          ))}
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
              placeholder="Platform:URL (comma-separated pairs)..."
              value={Object.entries(formData.profile_urls).map(([k, v]) => `${k}:${v}`).join(', ')}
              onChange={handleProfileUrlsChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Bio */}
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Bio
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
              name="bio"
              placeholder="Your bio..."
              value={formData.bio}
              onChange={handleChange}
              fontWeight="500"
            />
          </GradientBorder>
        </VuiBox>

        {/* Remember Me Switch */}
        <VuiBox display="flex" alignItems="center">
          <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Remember me
          </VuiTypography>
        </VuiBox>

        {/* Sign Up Button */}
        <VuiBox mt={4} mb={1}>
          <VuiButton color="info" fullWidth type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default VolunteerSignUp;
