# Complete Setup Guide

## 📋 Prerequisites

- Node.js (v14 or higher)
- Python 3.8 or higher
- npm or yarn

## 🚀 Step-by-Step Setup

### Step 1: Install Frontend Dependencies

```bash
cd frontend
npm install
```

This installs:
- React
- React Flow
- Zustand
- Other dependencies

### Step 2: Install Backend Dependencies

```bash
cd ../backend
pip install -r requirements.txt
```

This installs:
- FastAPI
- Uvicorn
- Python-multipart

### Step 3: Start Backend Server

```bash
# Make sure you're in the backend directory
cd backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete.
```

**Keep this terminal open!**

### Step 4: Start Frontend Server

Open a **NEW terminal window**:

```bash
cd frontend
npm start
```

This will:
- Start the React development server
- Open http://localhost:3000 in your browser
- Automatically reload when you make changes

**Keep this terminal open too!**

### Step 5: Verify Everything Works

1. **Check Backend**: Open http://localhost:8000 in browser
   - Should see: `{"Ping":"Pong"}`

2. **Check Frontend**: Should already be open at http://localhost:3000
   - You should see the toolbar with node types
   - Canvas area below
   - Submit button at bottom

## 🎯 How to Use the Application

### 1. Create Nodes
- **Drag** nodes from the toolbar (top) onto the canvas
- Each node type has a unique color

### 2. Connect Nodes
- **Click and drag** from an output handle (right side) to an input handle (left side)
- Connections appear as arrows

### 3. Configure Nodes
- **Click** on a node to see its configuration
- Text node: Type text with `{{variable}}` syntax
- Input/Output nodes: Set name and type
- Transform node: Select transformation type

### 4. Submit Pipeline
- Click **"Submit Pipeline"** button at the bottom
- A modal will show:
  - Number of nodes
  - Number of edges
  - Is DAG (Directed Acyclic Graph) status

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                         │
│                    Port: 3000                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Toolbar    │  │     UI       │  │   Submit     │     │
│  │  (Nodes)     │  │  (Canvas)    │  │   Button     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                 │                  │              │
│         │                 │                  │              │
│         ▼                 ▼                  ▼              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Zustand Store (State)                    │  │
│  │  - nodes: []                                          │  │
│  │  - edges: []                                          │  │
│  │  - nodeIDs: {}                                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ HTTP POST
                            │ /pipelines/parse
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    BACKEND (FastAPI)                        │
│                    Port: 8000                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   main.py    │  │ pipeline_    │  │  graph_      │     │
│  │  (API)       │──│  service.py  │──│  utils.py    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                 │                  │              │
│         │                 │                  │              │
│         │                 │                  ▼              │
│         │                 │         ┌─────────────────┐     │
│         │                 │         │  Kahn's         │     │
│         │                 │         │  Algorithm      │     │
│         │                 │         │  (DAG Check)    │     │
│         │                 │         └─────────────────┘     │
│         │                 │                                  │
│         └─────────────────┘                                  │
│                   Returns:                                    │
│                   {                                           │
│                     num_nodes: 5,                             │
│                     num_edges: 4,                             │
│                     is_dag: true                              │
│                   }                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 📁 File Structure Overview

```
vectorshift/
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main app component
│   │   ├── index.js            # Entry point
│   │   ├── store.js            # Zustand state management
│   │   ├── ui.js               # React Flow canvas
│   │   ├── submit.js            # Submit button & API call
│   │   ├── toolbar.js           # Node palette
│   │   ├── draggableNode.js    # Draggable node component
│   │   ├── Modal.js             # Results modal
│   │   ├── components/          # Reusable components
│   │   │   ├── InputField.js
│   │   │   └── SelectField.js
│   │   ├── nodes/               # All node types
│   │   │   ├── BaseNode.js      # Base abstraction
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── textNode.js      # Dynamic text node
│   │   │   ├── llmNode.js
│   │   │   └── ... (others)
│   │   ├── styles/              # Styling
│   │   ├── utils/               # Utilities
│   │   └── constants/           # Constants
│   └── package.json
│
└── backend/
    ├── main.py                  # FastAPI app
    ├── pipeline_service.py      # Business logic
    ├── graph_utils.py           # DAG detection
    └── requirements.txt
```

## 🔄 Data Flow

```
User Action → Component → Store → API → Backend → Response → Modal
     │           │          │      │        │         │         │
     │           │          │      │        │         │         │
     ▼           ▼          ▼      ▼        ▼         ▼         ▼
  Drag Node  → UI.js →  Store → Submit → FastAPI → Analysis → Display
  Connect    → UI.js →  Store → Submit → FastAPI → Analysis → Display
  Submit     → Submit → Store → Fetch → FastAPI → DAG Check → Modal
```

## 🐛 Troubleshooting

### Problem: "Failed to fetch" error
**Solution**: Backend is not running
- Make sure backend server is running on port 8000
- Check terminal for errors
- Try: `curl http://localhost:8000/` to test

### Problem: Frontend won't start
**Solution**: 
- Check if port 3000 is already in use
- Try: `npm install` again in frontend folder
- Check for missing dependencies

### Problem: Nodes not dragging
**Solution**:
- Make sure you're dragging from toolbar, not clicking
- Check browser console for errors
- Refresh the page

### Problem: Backend import errors
**Solution**:
- Make sure you're in the backend directory when running
- Check that all files exist (main.py, pipeline_service.py, graph_utils.py)
- Try: `python3 -m pip install -r requirements.txt`

### Problem: CORS errors
**Solution**:
- Backend CORS is configured for http://localhost:3000
- Make sure frontend is running on port 3000
- Check backend main.py CORS_ORIGINS setting

## ✅ Quick Test Checklist

- [ ] Backend responds at http://localhost:8000/
- [ ] Frontend loads at http://localhost:3000
- [ ] Can drag nodes from toolbar
- [ ] Can connect nodes
- [ ] Text node creates handles for {{variables}}
- [ ] Submit button shows modal with results
- [ ] No console errors

## 🎬 Quick Start Commands

```bash
# Terminal 1 - Backend
cd backend
pip install -r requirements.txt
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

That's it! The app should now be running! 🎉

