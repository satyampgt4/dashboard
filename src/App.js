import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';

import Loading from './components/common/Loading'
import Header from './components/common/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/common/Footer'

function App() {
  let [isLoading,setIsLoading] = useState(true)
  let [studentsData,setStudentsData] = useState([])
  useEffect(()=>{
    setIsLoading(true)
    Papa.parse("/studentData/data.csv", {
      download: true,
      header: true,
      complete: function(results) {
        setStudentsData(results)
        setIsLoading(false)
      }
    });
  },[])
  return (
    <div className="page">
      { isLoading && <Loading />}
      <Header />
      <Dashboard 
        studentsData={studentsData}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
