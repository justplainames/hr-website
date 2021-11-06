import React from "react";

import { Switch,Route,Redirect } from "react-router-dom";
import Sidebar from "../../Sidebar/index";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top:120px
`;
function ProtectedRoute({ component: Component, ...restOfProps }) {

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Montserrat'
          ].join(','),
        }
  });
  
    return (
        <ThemeProvider theme={theme}>
            <Sidebar />
            <Pages>
                <Switch>
                    <Route
                        {...restOfProps}
                        render={(props) =>
                            isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
                        }
                    />
                </Switch>
            </Pages>
        </ThemeProvider>
    );
}

export default ProtectedRoute;