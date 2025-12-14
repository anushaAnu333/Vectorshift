import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { SelectField } from '../components/SelectField';
import { createInputHandle, createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

const TRANSFORM_OPTIONS = [
  { value: 'uppercase', label: 'Uppercase' },
  { value: 'lowercase', label: 'Lowercase' },
  { value: 'reverse', label: 'Reverse' },
  { value: 'trim', label: 'Trim' }
];

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      inputHandles={[createInputHandle(id)]}
      outputHandles={[createOutputHandle(id)]}
      style={NODE_COLORS.transform}
    >
      <div style={containerStyle}>
        <SelectField
          label="Type"
          value={transformType}
          onChange={(e) => setTransformType(e.target.value)}
          options={TRANSFORM_OPTIONS}
        />
      </div>
    </BaseNode>
  );
}

