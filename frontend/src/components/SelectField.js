import { labelStyle, labelTextStyle, selectStyle, handleFocus, handleBlur } from '../styles/nodeStyles';

export const SelectField = ({ label, value, onChange, options }) => {
  return (
    <label style={labelStyle}>
      <span style={labelTextStyle}>{label}:</span>
      <select
        value={value}
        onChange={onChange}
        style={selectStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

