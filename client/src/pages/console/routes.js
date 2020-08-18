import React from 'react';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';

import MapWrapper from '../../components/maps/map.wrapper';
import PocosView from '../../tables/pocos/pocos.view';

import { ReactComponent as Documents } from '../../assets/icons/main_categories_btn/Documents.svg';
import { ReactComponent as DocumentsOutline } from '../../assets/icons/main_categories_btn/DocumentsOutline.svg';
import { ReactComponent as Water } from '../../assets/icons/main_categories_btn/Water.svg';
import { ReactComponent as WaterOutline } from '../../assets/icons/main_categories_btn/WaterOutline.svg';
import { ReactComponent as Wrench } from '../../assets/icons/main_categories_btn/Wrench.svg';
import { ReactComponent as WrenchOutline } from '../../assets/icons/main_categories_btn/WrenchOutline.svg';
import { ReactComponent as Sewage } from '../../assets/icons/main_categories_btn/Sewage.svg';
import { ReactComponent as SewageOutline } from '../../assets/icons/main_categories_btn/SewageOutline.svg';

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
    btn: {
      icon: WaterOutline,
      iconActive: Water,
    },
    subMain: [
      {
        name: 'Mapa Principal',
        path: '/mapa',
        component: () => <MapWrapper />,
      },
      {
        name: 'Sistemas',
        path: '/sistemas',
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
    name: 'ESGOTO',
    path: '/esgoto',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    btn: {
      icon: SewageOutline,
      iconActive: Sewage,
    },
    subMain: [
      {
        name: 'Mapa Principal',
        path: '/mapa',
        component: () => <MapWrapper />,
      },
      {
        name: 'Sistemas',
        path: '/sistemas',
        component: () => <MapWrapper />,
      },
    ],
    subTables: [
      {
        name: "ETE's",
        path: '/etes',
        component: () => <PocosView />,
      },
    ],
  },
  {
    name: 'LICENCIAMENTO',
    path: '/licenciamento',
    innerRouter: (i) => <InnerRouteSwitch index={i} />,
    btn: {
      icon: DocumentsOutline,
      iconActive: Documents,
    },
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
    btn: {
      icon: WrenchOutline,
      iconActive: Wrench,
    },
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
