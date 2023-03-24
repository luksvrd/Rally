import PropTypes from "prop-types";

export default function Button({ text, type, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: null,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};
