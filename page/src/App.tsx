import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Open from './screens/Open';
import Home from './screens/Home';
import { AppContext } from './AppContext';

function App() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ url, setUrl }}>
      <HashRouter>
        <Switch>
          <Route path="/open">
            <Open />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
