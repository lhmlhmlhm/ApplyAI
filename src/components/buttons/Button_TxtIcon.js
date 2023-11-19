import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomButton.css';

const Button_TxtIcon = ({ text, onClick, size, imageSrc, imageAlt, style }) => {
  // Define default styles and then override with props as needed
  const buttonStyle = {
    padding: '10px 20px', // Default padding
    fontSize: '14px', // Default font size
    ...style, // Custom styles
  };
  
  // Define image style
  const imageStyle = {
    height: '20px',
  };

  // Adjust styles based on the size prop
  if (size === 'large') {
    buttonStyle.padding = '16px 32px';
    buttonStyle.fontSize = '18px';
    imageStyle.height = '30px';
  } else if (size === 'small') {
    buttonStyle.padding = '8px 16px';
    buttonStyle.fontSize = '12px';
    imageStyle.height = '18px';
  }



  return (
    <button className="Button_TxtIcon" onClick={onClick} style={buttonStyle}>
      {text}
      {imageSrc && 
      <img 
      src={imageSrc} 
      alt={imageAlt || 'Button icon'} 
      className="button_image" 
      style={imageStyle} />}
    </button>
  );
};

Button_TxtIcon.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  style: PropTypes.object,
};

Button_TxtIcon.defaultProps = {
  size: 'medium',
  onClick: () => {},
};

export default Button_TxtIcon;