import React, { useState } from 'react';
import { Button, Link } from '@material-ui/core/';

export default function ConsolePage() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className="root">
      <header className="header">
        <div className={`header-container`}>
          <Button className="btn">Sobre</Button>
          <Button className="btn">Ajuda</Button>
          <Button className="btn">Contato</Button>
          <Button className="btn">LOG IN</Button>
        </div>
      </header>
      Console
    </div>
  );
}
