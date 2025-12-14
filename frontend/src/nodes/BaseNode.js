import { Handle, Position } from 'reactflow';
import { handleStyle, titleStyle, childrenContainerStyle, getBaseNodeStyle } from '../styles/baseNodeStyles';

export const BaseNode = ({ 
  id, 
  data, 
  title,
  children,
  inputHandles = [],
  outputHandles = [],
  width = 200,
  height,
  className = '',
  style = {}
}) => {
  const baseStyle = getBaseNodeStyle(width, height, style);

  return (
    <div className={`base-node ${className}`} style={baseStyle}>
      {inputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id || `input-${index}`}
          style={{
            ...handleStyle,
            ...handle.style,
            top: handle.top || '50%'
          }}
        />
      ))}

      {title && <div style={titleStyle}>{title}</div>}

      <div style={childrenContainerStyle}>
        {children}
      </div>

      {outputHandles.map((handle, index) => (
        <Handle
          key={handle.id || `output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id || `output-${index}`}
          style={{
            ...handleStyle,
            ...handle.style,
            top: handle.top || '50%'
          }}
        />
      ))}
    </div>
  );
};

