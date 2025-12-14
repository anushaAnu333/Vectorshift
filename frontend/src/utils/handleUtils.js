export const createVariableHandles = (nodeId, variables) => {
  return variables.map((variable, index) => ({
    id: `${nodeId}-${variable}`,
    style: {
      top: `${(index + 1) * (100 / (variables.length + 1))}%`
    }
  }));
};

export const createInputHandle = (nodeId, handleId = 'input') => ({
  id: `${nodeId}-${handleId}`
});

export const createOutputHandle = (nodeId, handleId = 'output') => ({
  id: `${nodeId}-${handleId}`
});

export const createMultipleOutputHandles = (nodeId, handles) => {
  return handles.map(handle => ({
    id: `${nodeId}-${handle.id}`,
    style: { top: `${handle.position}%` }
  }));
};

