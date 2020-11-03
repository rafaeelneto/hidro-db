import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import TableViewComponent from '../../components/tableViewComponent/tableView.component';

import MapWrapper from '../../components/maps/map.wrapper';

import pocosTable from '../../tables/tables/pocos/pocos.table';

const routesCategories = [
  {
    name: 'ÁGUA',
    path: '/agua',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    subRoutes: [
      {
        name: 'Mapa Principal',
        path: '/mapa',
        isMain: true,
        component: () => <MapWrapper />,
      },
      {
        name: 'Poços',
        path: '/pocos',
        table: pocosTable(),
      },
    ],
  },
];

const InnerRouteSwitch = ({ index }) => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        {[
          ...routesCategories[index].subRoutes.map((route) => {
            if (route.isMain) {
              console.log('Main route');
            }
            return (
              <Route key={route.path} path={path + route.path}>
                <TableViewComponent table={route.table} />
              </Route>
            );
          }),
        ]}
      </Switch>
    </div>
  );
};

export default routesCategories;
