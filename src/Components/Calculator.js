import React from "react";
import CalcContextProvider from "./Context";
import KeyPad from "./KeyPad";
import Display from "./Display";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

function Calculator() {
  return (
    <CalcContextProvider>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="h5"
                color="inherit"
                component="div"
                alignItems="center"
                justifyContent="center"
              >
                <h1 alignItems="centre">Calculator</h1>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "75px",
          }}
        >
          <div>
            <Display />
            <KeyPad />
          </div>
        </div>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" align="center">
                © Harshitha Tapse
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </CalcContextProvider>
  );
}

export default Calculator;
