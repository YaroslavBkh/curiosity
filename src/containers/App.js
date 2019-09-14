import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import QueryContext from '../context/queryContext';
import CameraSelector from '../components/selectors/CameraSelector/CameraSelector';
import DateSelector from '../components/selectors/DateSelector/DateSelector';
import RoverSelector from '../components/selectors/RoverSelector/RoverSelector';

function App() {
  const queryContext = useContext(QueryContext);
  const { rover } = queryContext;

  useEffect(() => {
    const fetchManifest = async () => {
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=WsCYjncMpMrMSOgnpMTXB33ATSzk0v2spwCccz4d`
      );
      console.log(res.data);
    };

    fetchManifest();
  }, [rover]);

  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector />
      <DateSelector />
      <RoverSelector />
    </div>
  );
}

export default App;
