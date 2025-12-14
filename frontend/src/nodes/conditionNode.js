import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { InputField } from '../components/InputField';
import { createInputHandle, createMultipleOutputHandles } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');

  const outputHandles = createMultipleOutputHandles(id, [
    { id: 'true', position: 30 },
    { id: 'false', position: 70 }
  ]);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Condition"
      inputHandles={[createInputHandle(id)]}
      outputHandles={outputHandles}
      style={NODE_COLORS.condition}
    >
      <div style={containerStyle}>
        <InputField
          label="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g., value > 0"
        />
      </div>
    </BaseNode>
  );
}

