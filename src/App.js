import { Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";

import Home from "./pages/Home";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import Login from './pages/Login'
import Maintenance from './pages/Maintenance'
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ProtectedRoute from "./component/route/protectedroute";



function App() {

  const theme = createMuiTheme({
      typography: {
        fontFamily: [
          'Montserrat'
        ].join(','),
      }
});



  return (
    <>
<Switch>
    <Route exact path='/auth' component={Login}/>
    <ProtectedRoute exact path='/' component={Home}/>
    <ProtectedRoute exact path='/payslip' component={Payslip}/>
    <ProtectedRoute exact path='/leave/' component={Leave}/>
    <ProtectedRoute exact path='/maintenance/' component={Maintenance}/>
  </Switch>
   
    </>
  );
}

export default App;
