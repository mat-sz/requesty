import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../AppContext';

const Open: React.FC = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);

  useEffect(() => {
    const url = new URLSearchParams(history.location.search).get('url');
    appContext.setUrl(url);
    history.push('/');
  }, [history, appContext]);

  return <div>Loading...</div>;
};

export default Open;
