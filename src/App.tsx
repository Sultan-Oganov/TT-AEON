import React, { useEffect } from 'react';
import { useActions } from './modules/hooks/useActions';
import Home from './views/Home';

const App: React.FC = () => {
  const { getData } = useActions();

  useEffect(() => {
    getData();
  }, []);
  return <Home/>
};

export default App;