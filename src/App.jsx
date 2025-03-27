
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries';
const fetchCountries=fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json());
function App() {
  

  return (
    <>
      <Suspense fallback={<h1>Data is loading.....</h1>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </>
  )
}

export default App
