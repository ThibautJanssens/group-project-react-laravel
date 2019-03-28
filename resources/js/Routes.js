import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import CreateAccount from './components/create-account';
import Create from './components/create';
import DisplayAll from './components/create';
import DisplayEvent from './components/display-event';
import DisplayPast from './components/display-past';
import Edit from './components/edit';
import Login from './components/login';
import Logout from './components/logout';
import SubscriptionEvent from './components/subscription-event';
import UnsubscriptionEvent from './components/unsuscription-event';

const Routes = () => (
  <Switch>
      <Route path='/home' component={ Home } />
      <Route path='/create-account' component={ CreateAccount } />
      <Route path='/create-event' component={ Create } />
      <Route path='/display-all' component={ DisplayAll } />
      <Route path='/display-event' component={ DisplayEvent } />
      <Route path='/display-past' component={ DisplayPast } />
      <Route path='/edit' component={ Edit } />
      <Route path='/login' component={ Login } />
      <Route path='/logout' component={ Logout } />
      <Route path='/subscription-event' component={ SubscriptionEvent } />
      <Route path='/unsuscription-event' component={ UnsubscriptionEvent } />
  </Switch>
)

export default Routes