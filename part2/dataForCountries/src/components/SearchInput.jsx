const SearchInput = ({ value, onChange }) => (
  <div>
    Find countries: <input value={value} onChange={onChange} />
  </div>
);

export default SearchInput;
