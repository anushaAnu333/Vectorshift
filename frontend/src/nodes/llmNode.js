import { BaseNode } from './BaseNode';
import { createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';

const descriptionStyle = {
  fontSize: '13px',
  color: '#6b7280',
  lineHeight: '1.5',
  padding: '8px',
  backgroundColor: '#f9fafb',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  wordWrap: 'break-word',
  overflowWrap: 'break-word'
};

export const LLMNode = ({ id, data }) => {
  const inputHandles = [
    { id: `${id}-system`, style: { top: '33%' } },
    { id: `${id}-prompt`, style: { top: '67%' } }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputHandles={inputHandles}
      outputHandles={[createOutputHandle(id, 'response')]}
      style={NODE_COLORS.llm}
    >
      <div style={descriptionStyle}>
        This is a LLM node for language model operations.
      </div>
    </BaseNode>
  );
}
