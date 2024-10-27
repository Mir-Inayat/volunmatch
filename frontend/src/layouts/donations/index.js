import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import NGO from 'layouts/donations/components/ngo';
import axiosInstance from '../../axiosConfig';

function Donations() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/ngos')
      .then((response) => {
        setNgos(response.data.ngos || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching NGO data:", error);
        setError("Failed to load NGO data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Dummy data in case the API call fails or returns empty
  const dummyNgos = [
    { id: 1, name: "NGO 1", description: "Description for NGO 1. This organization focuses on environmental conservation.", image: "/path/to/image1.jpg", progress: 30 },
    { id: 2, name: "NGO 2", description: "Description for NGO 2. This organization works towards education for underprivileged children.", image: "/path/to/image2.jpg", progress: 50 },
    { id: 3, name: "NGO 3", description: "Description for NGO 3. This organization provides healthcare services in rural areas.", image: "/path/to/image3.jpg", progress: 70 },
  ];

  const displayNgos = ngos.length > 0 ? ngos : dummyNgos;

  return (
    <DashboardLayout>
      <VuiBox mt={5} mb={3}>
        <VuiTypography variant="h4" mb={3} color="white">
          Donations Dashboard
        </VuiTypography>
        {loading ? (
          <VuiTypography color="white">Loading...</VuiTypography>
        ) : error ? (
          <VuiTypography color="error">{error}</VuiTypography>
        ) : (
          <Grid container spacing={3}>
            {displayNgos.map((ngo) => (
              <Grid item xs={12} key={ngo.id}>
                <NGO 
                  name={ngo.name}
                  description={ngo.description}
                  image={ngo.image}
                  progress={ngo.progress}
                  link={`/donate/${ngo.id}`}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </VuiBox>
    </DashboardLayout>
  );
}

export default Donations;
