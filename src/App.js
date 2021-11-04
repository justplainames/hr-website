import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";

import Home from "./pages/Home";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import Login from './pages/Login'
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ProtectedRoute from "./component/route/protectedroute";


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top:120px
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
<Switch>
    <Route exact path='/auth' component={Login}/>
    <ProtectedRoute exact path='/' component={Home}/>
    <ProtectedRoute exact path='/payslip' component={Payslip}/>
    <ProtectedRoute exact path='/leave' component={Leave}/>
  </Switch>
   
    </>
  );
}

export default App;
