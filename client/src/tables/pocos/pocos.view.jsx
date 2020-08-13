import React from 'react';
import { Route, Switch as RouteSwitch, useRouteMatch } from 'react-router-dom';

import PocosItem from './pocos.item';

const PocosView = () => {
  return (
    <div>
      <h2>Poços Principal</h2>
    </div>
  );
};

export default () => {
  const { path } = useRouteMatch();
  return (
    <RouteSwitch>
      <Route exact path={path}>
        <PocosView />
      </Route>
      <Route path={`${path}/:id`}>
        <PocosItem />
      </Route>
    </RouteSwitch>
  );
};
