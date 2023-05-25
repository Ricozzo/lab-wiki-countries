import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${countryId}`
        );
        setCountry(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [countryId]);

  return (
    <div>
      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <h3>Tech Stack: {country.technologies}</h3>
          <p>{country.description}</p>
          <Link to="/countries">Back</Link>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;

