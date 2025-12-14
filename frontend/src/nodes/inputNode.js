import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';
import { createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

const INPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' }
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      outputHandles={[createOutputHandle(id, 'value')]}
      style={NODE_COLORS.input}
    >
      <div style={containerStyle}>
        <InputField
          label="Name"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
        <SelectField
          label="Type"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          options={INPUT_TYPE_OPTIONS}
        />
      </div>
    </BaseNode>
  );
}
