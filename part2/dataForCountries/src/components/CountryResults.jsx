import CountryDetail from "./CountryDetail";

const CountryResults = ({ countries, onShowCountry }) => {
	if (countries.length > 10) {
		return <p>Too many matches, specify another filter</p>;
	}

	if (countries.length > 1) {
		return (
			<div>
				{countries.map((country) => (
					<p key={country.name.common}>
						{country.name.common} <button onClick={() => onShowCountry(country.name.common)}>show</button>
					</p>
				))}
			</div>
		);
	}

	if (countries.length === 1) {
		return <CountryDetail country={countries[0]} />;
	}

	return null;
};

export default CountryResults;
