import React, { Component } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>

          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;