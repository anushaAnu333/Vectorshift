import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { InputField } from '../components/InputField';
import { createInputHandle, createMultipleOutputHandles } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

export const SplitNode = ({ id, data }) => {
  const [delimiter, setDelimiter] = useState(data?.delimiter || ',');

  const outputHandles = createMultipleOutputHandles(id, [
    { id: 'output1', position: 30 },
    { id: 'output2', position: 70 }
  ]);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Split"
      inputHandles={[createInputHandle(id)]}
      outputHandles={outputHandles}
      style={NODE_COLORS.split}
    >
      <div style={containerStyle}>
        <InputField
          label="Delimiter"
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
        />
      </div>
    </BaseNode>
  );
}
