import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';
import { extractVariables, calculateTextNodeDimensions } from '../utils/textUtils';
import { createVariableHandles, createOutputHandle } from '../utils/handleUtils';
import { NODE_COLORS } from '../constants/nodeColors';
import { containerStyle, labelStyle, labelTextStyle, handleInputFocus, handleInputBlur } from '../styles/nodeStyles';
import { textareaStyle, variableDisplayStyle } from '../styles/textNodeStyles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 220, height: 150 });

  useEffect(() => {
    const extractedVars = extractVariables(currText);
    setVariables(extractedVars);
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      
      const textareaMinHeight = 60;
      const textareaHeight = Math.max(textareaMinHeight, scrollHeight);
      textarea.style.height = `${textareaHeight}px`;
      
      const { width, height } = calculateTextNodeDimensions(
        textareaHeight,
        currText.length,
        variables.length
      );
      
      setDimensions({ width, height });
    }
  }, [currText, variables]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const inputHandles = createVariableHandles(id, variables);
  const outputHandles = [createOutputHandle(id)];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      width={dimensions.width}
      height={dimensions.height}
      style={NODE_COLORS.text}
    >
      <div style={{ ...containerStyle, overflow: 'visible', flexShrink: 0 }}>
        <label style={labelStyle}>
          <span style={labelTextStyle}>Text:</span>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            placeholder="Enter text with {{ variables }}"
            style={textareaStyle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            rows={3}
          />
        </label>
        {variables.length > 0 && (
          <div style={variableDisplayStyle}>
            <strong>Variables:</strong> {variables.join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
}
