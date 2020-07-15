import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const Home: React.FC = () => {
  const appContext = useContext(AppContext);

  return <div>URL: {appContext.url}</div>;
};

export default Home;
