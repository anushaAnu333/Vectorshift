export const extractVariables = (text) => {
  const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = new Set();
  let match;
  
  while ((match = variablePattern.exec(text)) !== null) {
    variables.add(match[1]);
  }
  
  return Array.from(variables);
};

export const calculateTextNodeDimensions = (scrollHeight, textLength, variableCount) => {
  const minWidth = 220;
  const maxWidth = 400;
  const minHeight = 150;
  
  const basePadding = 32;
  const titleHeight = 25;
  const titleGap = 12;
  const labelGap = 6;
  const labelTextHeight = 20;
  const elementGap = 10;
  
  const contentWidth = Math.max(
    minWidth - basePadding,
    Math.min(maxWidth - basePadding, textLength * 7)
  );
  const estimatedWidth = Math.max(minWidth, Math.min(maxWidth, contentWidth + basePadding));
  
  const textareaHeight = Math.max(60, scrollHeight + 20);
  const variableHeight = variableCount > 0 ? 35 : 0;
  
  const calculatedHeight =
    basePadding +
    titleHeight +
    titleGap +
    labelTextHeight +
    labelGap +
    textareaHeight +
    (variableCount > 0 ? elementGap + variableHeight : 0) +
    elementGap;
  
  return {
    width: estimatedWidth,
    height: Math.max(minHeight, calculatedHeight)
  };
};

