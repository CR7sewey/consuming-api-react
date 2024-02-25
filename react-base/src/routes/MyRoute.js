import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
// Criamos a nossa propria rota baseado no ROute, e substituimos no index
// componente do react ou funcao
                                                       // fecahda ou aberta a rota
export default function MyRoute({component: Component, isClosed , ...rest}) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) { // fechada e not logged
    return (
      <Redirect                               // caminho antigo
      to={{pathname: '/login', state: {prevPath: rest.location.pathname}}}
      />
    )
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />
}

MyRoute.defaultProps = {
  isClosed: false,
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
}
