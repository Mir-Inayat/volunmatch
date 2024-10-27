import React from 'react';
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

function NGO({ name, description, image, progress, link }) {
  return (
    <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <VuiBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <VuiBox display="flex" alignItems="center" mb={2}>
              <VuiBox
                component="img"
                src={image}
                alt={name}
                width="50px"
                height="50px"
                borderRadius="lg"
                mr={2}
              />
              <VuiTypography variant="h6" color="white">
                {name}
              </VuiTypography>
            </VuiBox>
            <VuiTypography variant="button" fontWeight="regular" color="white">
              {description}
            </VuiTypography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link to={link} style={{ textDecoration: 'none' }}>
              <VuiBox>
                <VuiTypography variant="button" fontWeight="medium" color="white" mb={1}>
                  Donation Progress: {progress}%
                </VuiTypography>
                <VuiProgress value={progress} color="info" variant="gradient" label={false} />
              </VuiBox>
            </Link>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default NGO;

