# Demo Recording Checklist

## Pre-Recording Setup
- [ ] Backend server is running (`cd backend && python3 -m uvicorn main:app --reload`)
- [ ] Frontend is running (`cd frontend && npm start`)
- [ ] Browser is open to http://localhost:3000
- [ ] Screen recording software is ready
- [ ] Microphone is working

## Features to Demonstrate (In Order)

### 1. UI Overview
- [ ] Show toolbar with all 9 node types
- [ ] Mention unique color scheme
- [ ] Show canvas with grid and minimap

### 2. Node Creation
- [ ] Drag Input node - show form fields
- [ ] Drag Text node - demonstrate dynamic sizing
- [ ] Type text with variables: `Hello {{name}}, welcome to {{company}}`
- [ ] Show automatic handle creation
- [ ] Show auto-resizing as you type
- [ ] Drag LLM node - show description
- [ ] Drag Transform node - show dropdown
- [ ] Quick overview of other nodes

### 3. Connections
- [ ] Connect Input → Text → Transform → Output
- [ ] Connect variable handle on Text node
- [ ] Show Merge with multiple inputs
- [ ] Show Split/Condition with multiple outputs

### 4. Backend Integration
- [ ] Click Submit Pipeline button
- [ ] Show results modal with:
  - [ ] Node count
  - [ ] Edge count
  - [ ] DAG status (should be Yes)
- [ ] Close modal

### 5. Code Discussion Points
- [ ] Mention BaseNode abstraction
- [ ] Show file structure (components/, nodes/, styles/, utils/, constants/)
- [ ] Explain dynamic Text node implementation
- [ ] Mention Zustand for state management
- [ ] Mention FastAPI backend with DAG detection

## Key Talking Points

### Architecture
- "I created a BaseNode component that all nodes extend"
- "This ensures consistent styling and reduces code duplication"
- "The codebase is organized into logical directories"

### Dynamic Text Node
- "The Text node automatically extracts variables from {{ }} syntax"
- "It dynamically creates input handles for each variable"
- "The node size adjusts based on content using scrollHeight calculations"

### Backend Integration
- "The FastAPI backend uses Kahn's algorithm for topological sort"
- "This efficiently detects cycles in O(V+E) time"
- "The frontend sends pipeline data and displays results in a modal"

### Design
- "Each node type has a unique color for visual differentiation"
- "The UI uses modern design principles with smooth transitions"
- "All components are responsive and adapt to content"

## Time Allocation
- Introduction: 30 seconds
- UI Overview: 1-2 minutes
- Node Creation: 2-3 minutes
- Connections: 1-2 minutes
- Backend Integration: 2-3 minutes
- Code Discussion: 3-4 minutes
- Closing: 30 seconds
- **Total: ~10-12 minutes**

## Common Issues & Solutions

### Backend Not Running
- Error: "Failed to fetch"
- Solution: Start backend with `cd backend && python3 -m uvicorn main:app --reload`

### Nodes Not Dragging
- Solution: Make sure you're dragging from the toolbar, not clicking

### Submit Not Working
- Check browser console for errors
- Verify backend is running on port 8000
- Check CORS settings

## Post-Recording
- [ ] Review recording for clarity
- [ ] Ensure all features are shown
- [ ] Check audio quality
- [ ] Verify code discussion is clear

