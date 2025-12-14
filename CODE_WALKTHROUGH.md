# Code Walkthrough Guide

## Key Files to Mention During Demo

### Frontend Architecture

#### 1. `frontend/src/nodes/BaseNode.js`
**What to say:**
- "This is the core abstraction for all nodes"
- "It handles common functionality like handles, title, and styling"
- "All other nodes extend this component, ensuring consistency"

**Key features:**
- Dynamic handle rendering (input/output)
- Consistent styling
- Flexible width/height props

#### 2. `frontend/src/nodes/textNode.js`
**What to say:**
- "This demonstrates the dynamic sizing feature"
- "Uses useEffect to extract variables from {{ }} syntax"
- "Automatically calculates dimensions based on textarea scrollHeight"
- "Creates input handles dynamically for each variable"

**Key code to highlight:**
- `extractVariables()` function
- `useEffect` for dimension calculation
- Dynamic handle creation

#### 3. `frontend/src/store.js`
**What to say:**
- "Uses Zustand for state management"
- "Manages nodes, edges, and node ID generation"
- "Clean and simple state management solution"

#### 4. `frontend/src/submit.js`
**What to say:**
- "Handles pipeline submission to backend"
- "Sends nodes and edges as JSON"
- "Displays results in a modal component"
- "Includes error handling"

#### 5. `frontend/src/utils/textUtils.js`
**What to say:**
- "Utility function for extracting variables"
- "Uses regex to find {{ variable }} patterns"
- "Returns unique variable names"

#### 6. `frontend/src/utils/handleUtils.js`
**What to say:**
- "Utility functions for creating node handles"
- "Ensures consistent handle creation across nodes"
- "Handles positioning for multiple handles"

### Backend Architecture

#### 7. `backend/main.py`
**What to say:**
- "FastAPI application entry point"
- "Configures CORS for frontend communication"
- "Defines the /pipelines/parse endpoint"
- "Handles JSON parsing and error handling"

#### 8. `backend/graph_utils.py`
**What to say:**
- "Contains the DAG detection algorithm"
- "Uses Kahn's algorithm (topological sort)"
- "Efficiently detects cycles in O(V+E) time"
- "Returns True if graph is acyclic"

#### 9. `backend/pipeline_service.py`
**What to say:**
- "Business logic for pipeline analysis"
- "Counts nodes and edges"
- "Calls DAG detection function"
- "Returns structured response"

### Directory Structure

```
frontend/src/
├── components/        # Reusable UI components
│   ├── InputField.js
│   ├── SelectField.js
│   └── Modal.js
├── nodes/            # All node implementations
│   ├── BaseNode.js
│   ├── inputNode.js
│   ├── textNode.js
│   └── ...
├── styles/           # Centralized styling
│   ├── baseNodeStyles.js
│   ├── nodeStyles.js
│   └── textNodeStyles.js
├── utils/            # Utility functions
│   ├── textUtils.js
│   └── handleUtils.js
├── constants/        # Configuration
│   ├── nodeColors.js
│   ├── api.js
│   └── ui.js
├── store.js          # Zustand state management
├── ui.js             # React Flow canvas
├── submit.js          # Pipeline submission
└── App.js            # Root component
```

## Key Technical Points to Emphasize

### 1. Code Organization
- "Modular structure with clear separation of concerns"
- "Reusable components reduce duplication"
- "Centralized constants and styles"

### 2. Dynamic Features
- "Text node automatically adjusts to content"
- "Variable extraction happens in real-time"
- "Handle creation is dynamic based on input"

### 3. Backend Integration
- "RESTful API with FastAPI"
- "Efficient graph algorithm implementation"
- "Proper error handling and validation"

### 4. Code Quality
- "No inline comments - production-ready code"
- "Consistent naming conventions"
- "Clean, readable code structure"

## Sample Code Discussion Script

### Opening
"I'd like to walk through the key architectural decisions I made..."

### BaseNode Abstraction
"First, I created a BaseNode component that all nodes extend. This ensures consistent styling and behavior. Let me show you the structure..."

### Dynamic Text Node
"The Text node is particularly interesting because it dynamically adjusts its size and creates handles based on user input. Here's how it works..."

### State Management
"I used Zustand for state management because it's lightweight and provides a clean API for managing the pipeline state..."

### Backend Integration
"The backend uses FastAPI and implements Kahn's algorithm for efficient DAG detection. The algorithm runs in O(V+E) time..."

### Code Organization
"The codebase is organized into logical directories - components, nodes, styles, utils, and constants. This makes it easy to maintain and extend..."

### Closing
"Overall, the architecture prioritizes maintainability, reusability, and clean code principles..."

