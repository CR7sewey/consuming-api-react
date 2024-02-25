import React from "react";
import { Switch, Route } from 'react-router-dom';
// Switch para so uma rota ser chamada por vez
import Page404 from '../pages/Page404';
import Login from '../pages/Login';


export default function Routes() {
  return (


    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>

  );
}
