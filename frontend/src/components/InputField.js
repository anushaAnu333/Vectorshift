import { labelStyle, labelTextStyle, inputStyle, handleInputFocus, handleInputBlur } from '../styles/nodeStyles';

export const InputField = ({ label, value, onChange, placeholder, type = 'text' }) => {
  return (
    <label style={labelStyle}>
      <span style={labelTextStyle}>{label}:</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </label>
  );
};

