import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CustomInput.css';

function Radio_Lbl({ name, options, value, onChange, ...props }) {
    return (
        <div className="reusable-radio-input">
        {options.map(option => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              {...props}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
}

Radio_Lbl.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
  
export default Radio_Lbl;


// const [formData, setFormData] = useState({
//     gender: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form>
//       <ReusableRadioInput
//         name="gender"
//         value={formData.gender}
//         onChange={handleChange}
//         options={[
//           { label: 'Male', value: 'male' },
//           { label: 'Female', value: 'female' },
//           { label: 'Other', value: 'other' }
//         ]}
//       />
//       {/* Other form elements */}
//     </form>
// );