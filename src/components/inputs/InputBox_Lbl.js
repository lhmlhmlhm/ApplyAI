import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomInput.css';

const InputBox_Lbl = ({ label, name, type, value, onChange, width, backgroundColor, textColor, borderStyle, borderRadius, labelSpacing, ...props }) => {
    const inputStyle = {
        width: width,
        backgroundColor: backgroundColor,
        color: textColor,
        border: borderStyle,
        borderRadius: borderRadius,
        
    };
    const labelStyle = {
        color: 'rgb(255, 255, 255)',
        marginBottom: labelSpacing,
    };

    return (
        <div className="InputBox_Lbl" style={{ width: width }}>
        {label && <label style={labelStyle}> {label} </label>}
        <input 
            type={type} 
            name={name} 
            value={value}
            onChange={onChange} 
            style={inputStyle} 
            {...props} 
        />
        </div>
    );
};

InputBox_Lbl.propTypes = {
    label: PropTypes.string.isRequired,
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    borderStyle: PropTypes.string,
    borderRadius: PropTypes.string,
    labelSpacing: PropTypes.string,
};
  
InputBox_Lbl.defaultProps = {
    width: '100%', // Default width
    backgroundColor: 'rgba(200, 200, 200, 0.3)', // Default background color
    textColor: 'white', // Default text color
    borderStyle: '0px solid white', // Default border style
    borderRadius: '5px', // Default border radius
    labelSpacing: '4px',
};

export default InputBox_Lbl;