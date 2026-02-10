import style from "./searchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={style.searchBox}>
      <label className={style.label}>
        Find contacts by name
      </label>

      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;

