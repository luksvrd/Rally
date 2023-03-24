import PropTypes from "prop-types";

export default function Select({ label, id, options, required }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} required={required}>
        <option value="" disabled selected>
          --Please choose an option--
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.defaultProps = {
  required: true,
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
};
