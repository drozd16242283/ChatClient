import React from 'react'
import { Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';


import Dashboard from '../Dashboard'
import SignIn from '../SignIn/Container'
import Chat from '../Chat/Container'
import NotFound from '../layouts/NotFound'


const Routes = (store) => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/chat" component={Chat} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes