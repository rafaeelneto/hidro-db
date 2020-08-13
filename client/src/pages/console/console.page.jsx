import React from 'react';
import { Button, useTheme, makeStyles, Box } from '@material-ui/core/';
import {
  useHistory,
  useRouteMatch,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MapWrapper from '../../components/maps/map.wrapper';
import PocosView from '../../tables/pocos/pocos.view';

import MainSideBar from '../../components/main_sidebar/mainSidebar.component';
import Header from '../../components/header/header.component';

import { ReactComponent as Documents } from '../../assets/icons/main_categories_btn/Documents.svg';
import { ReactComponent as DocumentsOutline } from '../../assets/icons/main_categories_btn/DocumentsOutline.svg';
import { ReactComponent as Water } from '../../assets/icons/main_categories_btn/Water.svg';
import { ReactComponent as WaterOutline } from '../../assets/icons/main_categories_btn/WaterOutline.svg';

const buttonsCategories = [
  {
    path: '/agua',
    name: 'ÁGUA',
    icon: WaterOutline,
    iconActive: Water,
  },
  {
    path: '/esgoto',
    name: 'ESGOTO',
    icon: WaterOutline,
    iconActive: Water,
  },
  {
    path: '/licenciamento',
    name: 'LICENCIAMENTO',
    icon: DocumentsOutline,
    iconActive: Documents,
  },
  {
    path: '/manutencao',
    name: 'MANUTENÇÃO',
    icon: WaterOutline,
    iconActive: Water,
  },
];

const aguaItens = {
  path: '/agua',
  main: [
    {
      nome: 'Mapa Principal',
      path: '/mapa',
      component: () => <MapWrapper />,
    },
    {
      nome: 'Sistemas',
      path: '/sistemas',
      component: () => <MapWrapper />,
    },
  ],
  tables: [
    {
      nome: 'Poços',
      path: '/pocos',
      component: () => <PocosView />,
    },
  ],
};

const AguaRoute = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      ÁGUA PAGE
      <Switch>
        {[
          ...aguaItens.tables.map((route) => (
            <Route
              key={route.path}
              path={path + route.path}
              children={<route.component />}
            />
          )),
          ...aguaItens.main.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              children={<route.component />}
            />
          )),
        ]}
      </Switch>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    panel: {
      display: 'flex',
      flowDirection: 'row',
      height: '100%',
    },
    sidebar: {
      height: '100%',
    },
    mainSidebar: {
      background: theme.palette.primary.light,
      width: '50px',
      height: '100%',
      padding: '5px 0 5px 0',
    },
  };
});

export default function ConsolePage() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useHistory();
  const { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.panel}>
        <Box boxShadow={2}>
          <aside className={classes.sidebar}>
            <div className={classes.mainSidebar}>
              <Switch>
                {buttonsCategories.map((button, index) => {
                  return (
                    <Route key={index} path={button.path}>
                      <MainSideBar buttons={buttonsCategories} />
                    </Route>
                  );
                })}
              </Switch>
            </div>
            <nav className="details_sidebar"></nav>
          </aside>
        </Box>
        <div className="main_canvas">
          <Switch>
            <Route exact path="/">
              <Redirect to="/agua"></Redirect>
            </Route>
            <Route path="/agua">
              <AguaRoute />
            </Route>
            <Route path="/esgoto">ESGOTO</Route>
            <Route path="/licencimento">LICENCIMENTO</Route>
            <Route path="/manutencao">MANUTENÇÃO</Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
