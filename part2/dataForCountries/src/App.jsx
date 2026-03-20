import { useEffect, useMemo, useState } from "react";
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

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <SearchInput value={filter} onChange={handleSearch} />
      <CountryResults countries={countriesToShow} />
    </div>
  );
};

export default App;
