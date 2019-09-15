import React, { useContext, useEffect } from 'react';
import './App.css';
import QueryContext from '../context/queryContext';
import CameraSelector from '../components/selectors/CameraSelector/CameraSelector';
import DateSelector from '../components/selectors/DateSelector/DateSelector';
import RoverSelector from '../components/selectors/RoverSelector/RoverSelector';
import SearchButton from '../components/SearchButton/SearchButton';

function App() {
  const queryContext = useContext(QueryContext);
  const { rover, getManifest } = queryContext;

  useEffect(() => {
    getManifest(rover);
  }, [rover]);

  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector />
      <DateSelector />
      <RoverSelector />
      <SearchButton />
    </div>
  );
}

export default App;
