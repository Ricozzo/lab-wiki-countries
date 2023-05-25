import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'


const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {

const [fetching, setFecthing] = useState(false);

const [countries, setCountries] = useState([]);

useEffect(()=>{
  axios.get(apiURL).then((response)=>{
    setCountries(response.data);
console.log(response.data[0])
    setFecthing(true);
  })
})


return <div className="App">
  <h3>List Of Countries</h3>
  {!fetching && <p>Loading</p>}

  {fetching && countries.map((country)=>{
    return(
      <div key={country._id}>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="img" /> 

        <h3>{country.name.common}</h3>
      </div>
    )
  })}
    
  </div>;
}

export default App;
