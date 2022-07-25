import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SampleApp from "./Sample";
import WebCamView from "./WebCamView";
import { Button, Container } from "@mui/material";

const theme = createTheme();

export default function CameraView({ handleShowTest }) {
  const [showCam, setShowCam] = React.useState(false);

  const handleShowCam = (value) => {
    setShowCam(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          {showCam ? <WebCamView /> : <>Start Detector</>}
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SampleApp showCam={showCam} handleShowCam={handleShowCam} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "40vh",
              }}
            >
              <Box
                component="footer"
                sx={{
                  py: 3,
                  px: 2,
                  mt: "auto",
                }}
              >
                <Container maxWidth="sm">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleShowTest(true)}
                  >
                    Take Test
                  </Button>
                </Container>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
