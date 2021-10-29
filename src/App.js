import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";

import Home from "./pages/Home";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {

  const theme = createMuiTheme({
      typography: {
        fontFamily: [
          'Montserrat'
        ].join(','),
      }
});

  const location = useLocation();

  return (
    <>
    <ThemeProvider theme = {theme}>
      <Sidebar/>
      <Pages>       
        <Switch location = {location} key = {location.pathname}>
          <Route exact path = '/' component = {Home} />
          <Route path = '/leave' component = {Leave} />
          <Route path = '/payslip' component = {Payslip} />          
        </Switch>        
      </Pages>
      </ThemeProvider>
    </>
  );
}

export default App;
