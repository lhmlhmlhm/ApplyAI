import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomInput.css';

function CheckBox_Lbl({ label, name, checked, onChange, labelColor, spacingStyle, ...props }) {
  // Define label style to include the color
  const labelStyle = {
    color: labelColor,
  };

  return (
    <div className="CheckBox_Lbl">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        style={spacingStyle} // Apply spacing style to input
        {...props}
      />
      <label style={labelStyle}>
        {label}
      </label>
    </div>
  );
}

CheckBox_Lbl.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  labelColor: PropTypes.string,
  spacingStyle: PropTypes.object,
};

CheckBox_Lbl.defaultProps = {
  labelColor: 'inherit', // Default color, which inherits from parent element
  spacingStyle: { marginRight: '10px' },
};

export default CheckBox_Lbl;