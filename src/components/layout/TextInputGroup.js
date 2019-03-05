import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// pass props as object in a const variable
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error //dynamic css binding with classnames module
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/* if submit is incomplete/invalid, show error  */}
      {error && <div className="invalid-feedback"> {error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string //error is not required
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
