# Screen Recording Demo Script

## Introduction (30 seconds)
- "This is my VectorShift Frontend Technical Assessment submission"
- "I've built a visual pipeline editor using React and React Flow"
- "The application allows users to create, connect, and analyze data processing pipelines"

## Part 1: UI Overview & Design (1-2 minutes)

### Show the Interface
1. **Toolbar/Palette**
   - "At the top, we have a node palette with 9 different node types"
   - Point out: Input, Output, LLM, Text, Transform, Filter, Merge, Split, Condition
   - "Each node type has a unique color scheme for visual differentiation"

2. **Canvas Area**
   - "The main canvas uses React Flow for drag-and-drop functionality"
   - "I've implemented a grid background and minimap for better navigation"
   - "The design is clean and modern with consistent styling"

## Part 2: Core Functionality - Node Creation (2-3 minutes)

### Demonstrate Node Types
1. **Input Node**
   - Drag an Input node onto the canvas
   - "Input nodes allow you to define data sources with name and type"
   - Show the form fields (Name, Type dropdown)

2. **Text Node** (Key Feature)
   - Drag a Text node
   - "The Text node is special - it dynamically adjusts its size based on content"
   - Type some text: "Hello {{name}}, welcome to {{company}}"
   - "Notice how input handles automatically appear for each variable"
   - "The node height and width adjust automatically as I type"
   - Show the variable display box

3. **LLM Node**
   - Drag an LLM node
   - "LLM nodes have predefined system and prompt input handles"
   - Show the description box

4. **Transform Node**
   - Drag a Transform node
   - "Transform nodes have a dropdown to select transformation type"
   - Show the options: Uppercase, Lowercase, Reverse, Trim

5. **Other Nodes** (Quick overview)
   - Drag Filter, Merge, Split, Condition nodes
   - "Each node has its own unique configuration options"

## Part 3: Node Connections (1-2 minutes)

### Create Connections
1. **Connect Nodes**
   - Connect Input → Text → Transform → Output
   - "You can connect nodes by dragging from output handles to input handles"
   - "The connections use smoothstep curves for a clean look"

2. **Show Variable Connections**
   - Connect Input output to Text node's variable input handle
   - "The Text node automatically creates input handles for variables in {{ }} syntax"

3. **Multiple Connections**
   - Show Merge node with two inputs
   - Show Split/Condition nodes with multiple outputs

## Part 4: Backend Integration & Analysis (2-3 minutes)

### Submit Pipeline
1. **Click Submit Button**
   - "When ready, click the Submit Pipeline button"
   - "This sends the pipeline structure to the FastAPI backend"

2. **Show Results Modal**
   - "The backend analyzes the pipeline and returns:"
   - Point out: Number of Nodes
   - Point out: Number of Edges
   - Point out: Is DAG (Directed Acyclic Graph) status
   - "A DAG means the pipeline has no cycles and can be executed in order"

3. **Test Different Scenarios**
   - Submit a valid pipeline (should show DAG: Yes)
   - Optionally create a cycle and show it detects it (DAG: No)

## Part 5: Code Discussion (3-4 minutes)

### Architecture Overview
1. **Node Abstraction**
   - "I created a BaseNode component that abstracts common functionality"
   - "All nodes extend this base, ensuring consistent styling and behavior"
   - "This makes it easy to add new node types"

2. **Code Organization**
   - "The codebase is well-structured:"
   - `components/` - Reusable UI components (InputField, SelectField, Modal)
   - `nodes/` - All node implementations
   - `styles/` - Centralized styling
   - `utils/` - Utility functions (text processing, handle creation)
   - `constants/` - Configuration constants

3. **Key Features Implementation**
   - **Dynamic Text Node**: "Uses useEffect hooks to extract variables and calculate dimensions based on scrollHeight"
   - **State Management**: "Uses Zustand for clean state management"
   - **Backend Integration**: "FastAPI backend with DAG detection using Kahn's algorithm"

4. **Styling Approach**
   - "Consistent color scheme with unique colors per node type"
   - "Responsive design with automatic height adjustment"
   - "Modern UI with smooth transitions and hover effects"

## Part 6: Technical Highlights (1-2 minutes)

### Mention Key Technical Decisions
1. **React Flow Integration**
   - "Leveraged React Flow for the graph visualization"
   - "Custom node types with dynamic handles"

2. **Backend Algorithm**
   - "Implemented topological sort (Kahn's algorithm) for cycle detection"
   - "Efficient O(V+E) time complexity"

3. **Code Quality**
   - "No inline comments - clean, production-ready code"
   - "Modular architecture for maintainability"
   - "Reusable components reduce code duplication"

## Closing (30 seconds)
- "The application demonstrates:"
  - Clean architecture and code organization
  - Dynamic UI components
  - Backend integration
  - Modern design principles
- "Thank you for reviewing my submission!"

---

## Tips for Recording

1. **Preparation**
   - Test all features before recording
   - Have a sample pipeline ready
   - Ensure backend is running

2. **Recording Tips**
   - Speak clearly and at a moderate pace
   - Pause briefly when showing UI elements
   - Use cursor to highlight important areas
   - Keep total time around 10-12 minutes

3. **What to Emphasize**
   - The dynamic Text node (most impressive feature)
   - Clean code structure
   - Backend integration working
   - Professional UI design

4. **Common Issues to Avoid**
   - Don't rush through features
   - Don't skip the code discussion
   - Make sure backend is running before demo
   - Test the submit functionality beforehand

