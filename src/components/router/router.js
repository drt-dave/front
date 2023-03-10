import React from "react";

import { BrowserRouter as Router,
  Route,
  Switch,
  } from "react-router-dom";

import PrivateRoute from '../auth/privateroute';
import Login from "../login/login"
import Eventos from '../eventos/eventos.buscar';

export default function AppRouter(){
  return(
    <Router>
      <Switch>
	<Route exact path={["/front", "/login"]} component={Login}/>
	<PrivateRoute exact path="/eventos" component={Eventos}/>
	<Route 
	  path={["*"]} 
	  component={() => (
	  <h1 style={{marginTop:300}}>
	   404
	   <br />
	   Página no encontrada
	  </h1>
	  )}
	/>

      </Switch>
    </Router>
  );
}

