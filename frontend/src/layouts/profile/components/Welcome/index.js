import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import burceMars from "assets/images/avatar-simmmple.png";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Header({ name, email, skills, phone, availability }) {
  const formatSkills = (skills) => {
    if (Array.isArray(skills)) {
      return skills.join(', ');
    } else if (typeof skills === 'string') {
      return skills;
    }
    return 'coding, design, communication';
  };

  const formatAvailability = (availability) => {
    if (typeof availability === 'object' && availability !== null) {
      return JSON.stringify(availability);
    } else if (typeof availability === 'string') {
      return availability;
    }
    return 'monday:afternoon: Not Available evening: Available morning: Available tuesday:afternoon: Available evening: Not Available morning: Not Available';
  };

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
              {name ? (
                <>
                  <VuiTypography variant="lg" color="white" fontWeight="bold">
                    Nice to see you, {name}!
                  </VuiTypography>
                  <VuiTypography variant="button" color="text" fontWeight="regular">
                    {email || 'user@example.com'}
                  </VuiTypography>
                  <VuiTypography variant="button" color="text" fontWeight="regular">
                    Skills: {formatSkills(skills)}
                  </VuiTypography>
                  <VuiTypography variant="button" color="text" fontWeight="regular">
                    Phone: {phone || '+1234567890'}
                  </VuiTypography>
                  <VuiTypography variant="button" color="text" fontWeight="regular">
                    Availability: {formatAvailability(availability)}
                  </VuiTypography>
                </>
              ) : (
                <VuiTypography variant="lg" color="white" fontWeight="bold">
                  Loading user data...
                </VuiTypography>
              )}
            </VuiBox>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
