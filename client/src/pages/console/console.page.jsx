import React, { useState } from 'react';
import { Button, Link, Switch } from '@material-ui/core/';
import { useHistory, Route, Switch as RouterSwitch } from 'react-router-dom';

import { logout } from '../../utils/authetication';

const aguaItens = {
  path: '/agua',
  main: [
    {
      nome: 'Mapa Principal',
      path: '/mapa',
    },
    {
      nome: 'Sistemas',
      path: '/sistemas',
    },
  ],
  tables: [
    {
      nome: 'Poços',
      path: '/pocos',
    },
    {
      nome: 'Cap. Superficiais',
      path: '/cap_superf',
    },
  ],
};

export default function ConsolePage() {
  const history = useHistory();

  return (
    <div className="root">
      <header className="header">
        <div className={`header-container`}>
          <Button className="btn">Sobre</Button>
          <Button className="btn">Ajuda</Button>
          <Button className="btn">Contato</Button>
          <Button
            className="btn"
            onClick={() => {
              logout();
              history.push('/login');
            }}
          >
            Logout
          </Button>
        </div>
      </header>
      <aside className="sidebar">
        <nav className="main_sidebar"></nav>
        <nav className="details_sidebar"></nav>
      </aside>
      <div className="main_canvas">
        <RouterSwitch>
          <Route exact path="/agua">
            <RouterSwitch>
              {aguaItens.main.map((item) => {
                return <Route exact path={item.path} />;
              })}
              {aguaItens.tables.map((table) => {
                return <Route exact path={table.path} />;
              })}
            </RouterSwitch>
          </Route>
        </RouterSwitch>
      </div>
    </div>
  );
}
