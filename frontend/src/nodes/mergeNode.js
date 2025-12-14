import { BaseNode } from './BaseNode';
import { createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';

const descriptionStyle = {
  fontSize: '13px',
  color: '#6b7280',
  lineHeight: '1.5',
  padding: '8px',
  backgroundColor: '#ffffff',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  wordWrap: 'break-word',
  overflowWrap: 'break-word'
};

export const MergeNode = ({ id, data }) => {
  const inputHandles = [
    { id: `${id}-input1`, style: { top: '30%' } },
    { id: `${id}-input2`, style: { top: '70%' } }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Merge"
      inputHandles={inputHandles}
      outputHandles={[createOutputHandle(id)]}
      style={NODE_COLORS.merge}
    >
      <div style={descriptionStyle}>
        Combines two inputs into one output.
      </div>
    </BaseNode>
  );
}
