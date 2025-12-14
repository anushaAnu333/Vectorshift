import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

const EDGE_STYLE = {
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    height: '20px',
    width: '20px'
  }
};

const initialState = {
  nodes: [],
  edges: [],
  nodeIDs: {}
};

export const useStore = create((set, get) => ({
  ...initialState,

  getNodeID: (type) => {
    const state = get();
    const nodeIDs = { ...state.nodeIDs };
    
    if (!nodeIDs[type]) {
      nodeIDs[type] = 0;
    }
    
    nodeIDs[type] += 1;
    set({ nodeIDs });
    
    return `${type}-${nodeIDs[type]}`;
  },

  addNode: (node) => {
    set((state) => ({
      nodes: [...state.nodes, node]
    }));
  },

  onNodesChange: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));
  },

  onEdgesChange: (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },

  onConnect: (connection) => {
    set((state) => ({
      edges: addEdge({ ...connection, ...EDGE_STYLE }, state.edges),
    }));
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: fieldValue
            }
          };
        }
        return node;
      }),
    }));
  },
}));
