import React from "react";
import { Switch } from 'react-router-dom';
// Switch para so uma rota ser chamada por vez
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import MyRoute from "./MyRoute";


export default function Routes() {
  return (


    <Switch>
      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>

  );
}
