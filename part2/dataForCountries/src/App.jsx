import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import CountryResults from "./components/CountryResults";
import countryService from "./services/countryService";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countryService.getAll().then((responseCountries) => {
      setCountries(responseCountries);
    });
  }, []);

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const handleShowCountry = (countryName) => {
    setFilter(countryName);
  };

  const getCountriesToShow = () => {
    if (filter === "") {
      return [];
    }

    const normalizedFilter = filter.toLowerCase();

    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(normalizedFilter),
    );
  };

  const countriesToShow = getCountriesToShow();

  return (
    <div>
      <SearchInput value={filter} onChange={handleSearch} />
      <CountryResults countries={countriesToShow} onShowCountry={handleShowCountry} />
    </div>
  );
};

export default App;
