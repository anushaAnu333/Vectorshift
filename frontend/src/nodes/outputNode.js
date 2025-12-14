import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';
import { createInputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle } from '../styles/nodeStyles';

const OUTPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'Image' }
];

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      inputHandles={[createInputHandle(id, 'value')]}
      style={NODE_COLORS.output}
    >
      <div style={containerStyle}>
        <InputField
          label="Name"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
        <SelectField
          label="Type"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          options={OUTPUT_TYPE_OPTIONS}
        />
      </div>
    </BaseNode>
  );
}
