export const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  minWidth: 0,
  width: '100%'
};

export const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  fontSize: '12px',
  color: '#4b5563',
  minWidth: 0,
  width: '100%'
};

export const labelTextStyle = {
  fontWeight: '500'
};

export const baseInputStyle = {
  padding: '8px 10px',
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  fontSize: '13px',
  outline: 'none',
  transition: 'all 0.2s',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box'
};

export const inputStyle = {
  ...baseInputStyle,
  backgroundColor: '#f9fafb'
};

export const selectStyle = {
  ...baseInputStyle,
  backgroundColor: '#f9fafb',
  cursor: 'pointer'
};

export const focusStyle = {
  borderColor: '#3b82f6',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
};

export const blurStyle = {
  borderColor: '#d1d5db',
  backgroundColor: '#f9fafb',
  boxShadow: 'none'
};

export const handleFocus = (e) => {
  Object.assign(e.target.style, focusStyle);
};

export const handleBlur = (e) => {
  Object.assign(e.target.style, blurStyle);
};

export const handleInputFocus = (e) => {
  e.target.style.borderColor = '#3b82f6';
  e.target.style.backgroundColor = '#ffffff';
  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
};

export const handleInputBlur = (e) => {
  e.target.style.borderColor = '#d1d5db';
  e.target.style.backgroundColor = '#f9fafb';
  e.target.style.boxShadow = 'none';
};

