import camelCase from "lodash/camelCase";
import PropTypes from "prop-types";

export default function Input({ label, id, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder || label}
        required={required}
        name={camelCase(id)}
      />
    </div>
  );
}

Input.defaultProps = {
  placeholder: null,
  required: true,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
