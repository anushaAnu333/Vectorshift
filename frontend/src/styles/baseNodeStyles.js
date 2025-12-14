export const handleStyle = {
  width: '12px',
  height: '12px',
  background: '#3b82f6',
  border: '2px solid #ffffff',
  borderRadius: '50%'
};

export const titleStyle = {
  fontWeight: '600',
  fontSize: '15px',
  color: '#1f2937',
  marginBottom: '2px',
  letterSpacing: '0.01em'
};

export const childrenContainerStyle = {
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: 0,
  width: '100%',
  overflow: 'visible'
};

export const getBaseNodeStyle = (width, height, customStyle) => ({
  width,
  ...(height ? { height, minHeight: height } : { minHeight: 120 }),
  border: '1px solid #d1d5db',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  padding: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  transition: 'all 0.2s ease',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'visible',
  ...customStyle
});

