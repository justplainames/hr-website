import { Route, Switch } from "react-router";
import Sidebar from "./Sidebar";

import Home from "./pages/Home";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Sidebar/>
      <Pages>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/leave' component = {Leave} />
          <Route path = '/payslip' component = {Payslip} />          
        </Switch>
      </Pages>
    </>
  );
}

export default App;
