import React from "react";
import { Switch } from 'react-router-dom';
// Switch para so uma rota ser chamada por vez
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Alunos from '../pages/Alunos';
import User from '../pages/User';
import Aluno from '../pages/Aluno';
import Fotos from '../pages/Fotos';



import MyRoute from "./MyRoute";


export default function Routes() {
// is closed se true so com login se pode aceder
// volta para a pagina de login se fechada

  return (
    <>
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id" component={Aluno} isClosed />
      <MyRoute exact path="/aluno" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} />
      <MyRoute exact path="/register" component={User} isClosed={false}/>
      <MyRoute exact path="/login" component={Login} isClosed={false} />

      <MyRoute path="*" component={Page404} />
    </Switch>
    </>
  );
}
