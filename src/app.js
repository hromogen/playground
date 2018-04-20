import React, {Fragment} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {HomePage} from './home-page';
import {FormPage} from './form-page';

export const App = () => <Fragment>
  <header>
    <nav>
      <Link to="./">
        Home
      </Link>
      {`  `}
      <Link to="./forms">
        React forms example
      </Link>
    </nav>
  </header>
  <main>
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path="/forms" component={FormPage} />
  </Switch>
  </main>
  </Fragment>;