import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../AppContext';

const Open: React.FC = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    let url = params.get('url');

    if (url?.startsWith('chrome')) {
      url = null;
    }

    appContext.setUrl(url);
    history.push('/');
  }, [history, appContext]);

  return <div>Loading...</div>;
};

export default Open;
