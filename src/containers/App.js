import React, { useContext, useEffect } from 'react';
import './App.css';
import QueryContext from '../context/query/queryContext';
import Banner from './Banner/Banner';
import Photos from '../components/Photos/Photos';

function App() {
  const queryContext = useContext(QueryContext);
  const { rover, getManifest } = queryContext;

  useEffect(() => {
    getManifest(rover);
  }, [rover]);

  return (
    <div className="wrapper">
      <Banner />
      <Photos />
    </div>
  );
}

export default App;
