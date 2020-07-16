import React, { useContext } from 'react';

import { AppContext } from '../AppContext';
import Options from '../components/Options';

const Home: React.FC = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="main">
      <h1>requesty</h1>
      <Options />
    </div>
  );
};

export default Home;
