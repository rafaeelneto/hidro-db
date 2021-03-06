import React from 'react';
import { useTheme, makeStyles, Box } from '@material-ui/core/';
import { Route, Switch, Redirect } from 'react-router-dom';

import { gql, useQuery } from '@apollo/client';

import CollapseSide from '../../themes/CollapseSide';

import MainSideBar from '../../components/main_sidebar/mainSidebar.component';
import SubSideBar from '../../components/sub_sidebar/subSidebar.component';
import Header from '../../components/header/header.component';

import routesCategories from './routes';
import LoadingComponent from '../../components/loadingComponent/loading.component';

const SIDEBAR_WIDTH = '250px';

const useStyles = makeStyles((theme) => ({
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
    maxHeight: '100%',
  },
  sidebar: {
    height: '100%',
    display: 'flex',
    flowDirection: 'row',
  },
  mainSidebar: {
    background: theme.palette.primary.light,
    width: '50px',
    height: '100%',
    padding: '5px 0 5px 0',
  },
  subRoutesSidebar: {
    width: SIDEBAR_WIDTH,
    background: theme.palette.common.white,
    height: '100%',
    padding: '10px 20px 5px 20px',
  },
  mainCanvas: {
    padding: '20px',
    flexGrow: 1,
    overflow: 'scroll',
  },
}));

const SIDEBAR_HIDDEN = gql`
  query IsUserLoggedIn {
    sideBarHidden @client
  }
`;

export default function ConsolePage() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { data } = useQuery(SIDEBAR_HIDDEN);
  let sideBarHidden = false;
  if (data) {
    sideBarHidden = data.sideBarHidden;
  } else {
    return <LoadingComponent />;
  }

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.panel}>
        <Box boxShadow={2}>
          <aside className={classes.sidebar}>
            <div className={classes.mainSidebar}>
              <MainSideBar
                buttons={routesCategories.map((route) => ({
                  path: route.path,
                  name: route.name,
                }))}
              />
            </div>
            <CollapseSide in={!sideBarHidden} size={SIDEBAR_WIDTH}>
              <div className={classes.subRoutesSidebar}>
                <Switch>
                  {routesCategories.map(
                    ({ path: routePath, subRoutes }, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Route key={index} path={routePath}>
                        <SubSideBar subRoutes={subRoutes} />
                      </Route>
                    ),
                  )}
                </Switch>
              </div>
            </CollapseSide>
          </aside>
        </Box>
        <div className={classes.mainCanvas}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/agua" />
            </Route>
            {routesCategories.map((route, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Route key={index} path={route.path}>
                {route.innerRouter(index)}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
