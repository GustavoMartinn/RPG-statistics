import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import { useEffect, useState } from 'react';
import { Field } from './types/field';
import { getStatistcs } from './service/database';

function App() {
  const [data, setData] = useState<Field[]>([]);

  const fetchData = () => {
    getStatistcs()
      .then((data) => {
        setData(data);
      })
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header /> 
      <Body data={data} />
      <Footer getData={fetchData} />
    </div>
  )
}

export default App
