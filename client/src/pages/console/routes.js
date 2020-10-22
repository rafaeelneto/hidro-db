import React from 'react';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';

import MapWrapper from '../../components/maps/map.wrapper';
import PocosView from '../../tables/pocos/pocos.view';

const InnerRouteSwitch = ({ index }) => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        {[
          ...routesCategories[index].subMain.map((route) => (
            <Route
              key={route.path}
              path={path + route.path}
              children={<route.component />}
            />
          )),
          ...routesCategories[index].subTables.map((route) => (
            <Route
              key={route.path}
              path={path + route.path}
              children={<route.component />}
            />
          )),
        ]}
      </Switch>
    </div>
  );
};

const routesCategories = [
  {
    name: 'ÁGUA',
    path: '/agua',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    subMain: [
      {
        name: 'Mapa Principal',
        path: '/mapa',
        component: () => <MapWrapper />,
      },
    ],
    subTables: [
      {
        name: 'Poços',
        path: '/pocos',
        component: () => <PocosView />,
      },
    ],
  },
  {
    name: 'LICENCIAMENTO',
    path: '/licenciamento',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    subMain: [],
    subTables: [
      {
        name: 'OUTORGAS',
        path: '/outorgas',
        component: () => <PocosView />,
      },
    ],
  },
  {
    name: 'MANUTENÇÃO',
    path: '/manutencao',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    subMain: [],
    subTables: [
      {
        name: 'BOMBAS',
        path: '/bombas',
        component: () => <PocosView />,
      },
    ],
  },
];

export default routesCategories;
