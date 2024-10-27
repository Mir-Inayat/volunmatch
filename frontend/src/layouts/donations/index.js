import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import NGO from 'layouts/donations/components/ngo';
import axiosInstance from '../../axiosConfig';

function Donations() {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/ngos')
      .then((response) => {
        console.log("API response:", response.data); // Add this line for debugging
        setOrganizations(response.data.organizations || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching organization data:", error);
        setError("Failed to load organization data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Dummy data in case the API call fails or returns empty
  const dummyOrganizations = [
    {
      id: 1,
      org_name: "Environmental Conservation NGO",
      description: "This organization focuses on environmental conservation and sustainability.",
      org_url: "https://eco-ngo.org",
      contact_name: "John Doe",
      contact_email: "contact@eco-ngo.org",
      org_type: "Environmental",
      cause_categories: ["Conservation", "Sustainability"],
    },
    {
      id: 2,
      org_name: "Education for All",
      description: "This organization works towards education for underprivileged children.",
      org_url: "https://edu-for-all.org",
      contact_name: "Jane Smith",
      contact_email: "contact@edu-for-all.org",
      org_type: "Education",
      cause_categories: ["Education", "Child Welfare"],
    },
    {
      id: 3,
      org_name: "Healthcare for Rural Areas",
      description: "This organization provides healthcare services in rural areas.",
      org_url: "https://rural-health.org",
      contact_name: "Alice Johnson",
      contact_email: "contact@rural-health.org",
      org_type: "Healthcare",
      cause_categories: ["Healthcare", "Rural Development"],
    }
  ];

  const displayOrganizations = organizations.length > 0 ? organizations : dummyOrganizations;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <VuiBox p={3}>
                <VuiTypography variant="h4" color="white">
                  Organizations
                </VuiTypography>
              </VuiBox>
            </Card>
          </Grid>
          {loading ? (
            <Grid item xs={12}>
              <Card>
                <VuiBox p={3}>
                  <VuiTypography color="white">Loading...</VuiTypography>
                </VuiBox>
              </Card>
            </Grid>
          ) : error ? (
            <Grid item xs={12}>
              <Card>
                <VuiBox p={3}>
                  <VuiTypography color="error">{error}</VuiTypography>
                </VuiBox>
              </Card>
            </Grid>
          ) : (
            displayOrganizations.map((org) => (
              <Grid item xs={12} md={6} lg={4} key={org.id}>
                <NGO 
                  name={org.org_name}
                  description={org.description}
                  link={org.org_url}
                  contactName={org.contact_name}
                  contactEmail={org.contact_email}
                  orgType={org.org_type}
                  causeCategories={org.cause_categories}
                />
              </Grid>
            ))
          )}
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Donations;
