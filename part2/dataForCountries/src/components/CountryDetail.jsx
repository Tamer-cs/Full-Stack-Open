const CountryDetail = ({ country }) => {
  const languages = country.languages ? Object.values(country.languages) : [];
  const capitals = Array.isArray(country.capital) ? country.capital : [];
  const flagUrl = country.flags.png;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {capitals.join(", ")}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
        <img src={flagUrl} alt={`Flag of ${country.name.common}`} width="200" />
    </div>
  );
};

export default CountryDetail;
