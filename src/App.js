import React, { Fragment, Suspense, lazy, Component, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <Pace color={theme.palette.primary.light} />
            {/*
              Why is suspense used here?
              What is the use of Fragment?
             */}
            <Suspense fallback={<Fragment />}>
                <Switch>
                  <Route path="/c">
                    <LoggedInComponent />
                  </Route>
                  <Route>
                    <LoggedOutComponent />
                  </Route>
                </Switch>
            </Suspense>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;