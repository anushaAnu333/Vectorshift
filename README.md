# VectorShift Pipeline Editor

A visual pipeline editor built with React and React Flow that allows users to create, connect, and analyze data processing pipelines. The application features a drag-and-drop interface for building node-based workflows with backend validation using FastAPI.

## Features

- **Visual Pipeline Editor**: Drag-and-drop interface for creating node-based pipelines
- **Multiple Node Types**: Input, Output, Text, Transform, Filter, LLM, Merge, Split, and Condition nodes
- **Dynamic Text Node**: Automatically detects variables using `{{variable}}` syntax and creates input handles
- **Auto-sizing Nodes**: Nodes dynamically adjust their size based on content
- **Pipeline Validation**: Backend analysis to check if pipeline is a Directed Acyclic Graph (DAG)
- **Modern UI**: Clean, responsive design with unique color schemes for each node type
- **Real-time Updates**: Immediate visual feedback for connections and node configurations

## Tech Stack

### Frontend
- React.js
- React Flow
- Zustand (State Management)
- CSS/Inline Styles

### Backend
- Python 3
- FastAPI
- Uvicorn

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8 or higher
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Start the backend server:
```bash
python3 -m uvicorn main:app --reload
```

The backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install npm dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. **Create Nodes**: Drag nodes from the toolbar at the top onto the canvas
2. **Configure Nodes**: Click on a node to edit its properties (name, type, conditions, etc.)
3. **Connect Nodes**: Drag from an output handle (right side) to an input handle (left side)
4. **Text Node Variables**: Type `{{variable_name}}` in the Text node to automatically create input handles
5. **Submit Pipeline**: Click the "Submit Pipeline" button to analyze your pipeline structure

## Project Structure

```
vectorshift/
├── backend/
│   ├── main.py                 # FastAPI application entry point
│   ├── graph_utils.py          # DAG detection algorithm
│   ├── pipeline_service.py     # Pipeline analysis service
│   └── requirements.txt        # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── nodes/             # Node implementations
│   │   ├── styles/            # Centralized styling
│   │   ├── utils/             # Utility functions
│   │   ├── constants/         # Configuration constants
│   │   ├── App.js             # Root component
│   │   ├── ui.js              # React Flow canvas
│   │   ├── store.js           # Zustand state management
│   │   └── submit.js          # Pipeline submission
│   └── package.json           # Node dependencies
└── README.md
```

## API Endpoints

### GET `/`
Health check endpoint
- Returns: `{"Ping": "Pong"}`

### POST `/pipelines/parse`
Analyze pipeline structure
- **Request**: Form data with `pipeline` (JSON string)
- **Response**: 
  ```json
  {
    "num_nodes": 3,
    "num_edges": 2,
    "is_dag": true
  }
  ```

## Node Types

- **Input**: Data source with configurable name and type
- **Output**: Data destination with configurable name and type
- **Text**: Text editor with automatic variable detection (`{{variable}}`)
- **Transform**: Text transformation (uppercase, lowercase, reverse, trim)
- **Filter**: Conditional filtering based on user-defined conditions
- **LLM**: Language model operations with predefined handles
- **Merge**: Combines two inputs into one output
- **Split**: Splits one input into two outputs with configurable delimiter
- **Condition**: Branches data flow based on true/false conditions

## Development

### Running in Development Mode

Backend (with auto-reload):
```bash
cd backend
python3 -m uvicorn main:app --reload
```

Frontend (with hot-reload):
```bash
cd frontend
npm start
```

### Building for Production

Frontend:
```bash
cd frontend
npm run build
```

## Dependencies

### Backend
- fastapi==0.104.1
- uvicorn[standard]==0.24.0
- python-multipart==0.0.6

### Frontend
See `frontend/package.json` for complete list

## License

This project is part of a technical assessment for VectorShift.
