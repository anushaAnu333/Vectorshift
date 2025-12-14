import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { InputField } from '../components/InputField';
import { createInputHandle, createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

export const FilterNode = ({ id, data }) => {
  const [filterCondition, setFilterCondition] = useState(data?.filterCondition || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      inputHandles={[createInputHandle(id)]}
      outputHandles={[createOutputHandle(id)]}
      style={NODE_COLORS.filter}
    >
      <div style={containerStyle}>
        <InputField
          label="Condition"
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
          placeholder="e.g., length > 10"
        />
      </div>
    </BaseNode>
  );
}
