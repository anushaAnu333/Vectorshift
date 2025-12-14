# 🚀 START HERE - Complete Guide

## Quick Start (3 Steps)

### Step 1: Install Dependencies

**Option A: Use the script (Recommended)**
```bash
./QUICK_START.sh
```

**Option B: Manual installation**
```bash
# Frontend
cd frontend && npm install && cd ..

# Backend
cd backend && pip install -r requirements.txt && cd ..
```

### Step 2: Start Backend (Terminal 1)
```bash
cd backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**✅ Success looks like:**
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete.
```

### Step 3: Start Frontend (Terminal 2 - NEW TERMINAL)
```bash
cd frontend
npm start
```

**✅ Success:** Browser opens to http://localhost:3000

---

## 📖 What You'll See

```
┌─────────────────────────────────────────┐
│  Node Palette                           │
│  [Input] [LLM] [Output] [Text] ...     │
├─────────────────────────────────────────┤
│                                         │
│         Canvas Area                     │
│    (Drag nodes here)                    │
│                                         │
│    ┌─────┐    ┌─────┐    ┌─────┐      │
│    │Node │───▶│Node │───▶│Node │      │
│    └─────┘    └─────┘    └─────┘      │
│                                         │
├─────────────────────────────────────────┤
│  [Submit Pipeline]                      │
└─────────────────────────────────────────┘
```

---

## 🎯 How to Use

### 1. Create Nodes
- **Drag** any node from the toolbar onto the canvas
- Each node type has a unique color

### 2. Connect Nodes
- **Click and drag** from a node's output handle (right side) 
- **Drop** on another node's input handle (left side)
- Connection appears as an arrow

### 3. Configure Nodes
- **Click** a node to see its properties
- **Edit** the fields (name, type, text, etc.)
- Changes save automatically

### 4. Text Node Special Feature
- Type text with `{{variable}}` syntax
- Example: `Hello {{name}}, welcome!`
- Input handles automatically appear for each variable
- Node size adjusts automatically

### 5. Submit Pipeline
- Click **"Submit Pipeline"** button
- Modal shows:
  - Number of nodes
  - Number of edges  
  - Is DAG (no cycles) status

---

## 📚 Documentation Files

1. **SETUP_GUIDE.md** - Detailed setup instructions
2. **VISUAL_DIAGRAM.md** - Visual diagrams of architecture
3. **TEST_SETUP.md** - Testing and troubleshooting
4. **DEMO_SCRIPT.md** - Script for screen recording
5. **CODE_WALKTHROUGH.md** - Code explanation guide

---

## ✅ Quick Verification

Test that everything works:

```bash
# Test backend
curl http://localhost:8000/
# Should return: {"Ping":"Pong"}

# Test frontend
# Open http://localhost:3000 in browser
# Should see toolbar and canvas
```

---

## 🐛 Troubleshooting

### Backend won't start?
```bash
cd backend
pip install -r requirements.txt
python3 -m uvicorn main:app --reload
```

### Frontend won't start?
```bash
cd frontend
npm install
npm start
```

### "Failed to fetch" error?
- Make sure backend is running on port 8000
- Check: `curl http://localhost:8000/`

### Nodes not dragging?
- Make sure you're dragging from toolbar, not clicking
- Check browser console (F12) for errors

---

## 🎨 Node Types

| Node | Color | Purpose |
|------|-------|---------|
| Input | 🟢 Green | Data source |
| Output | 🔴 Red | Data destination |
| LLM | 🟣 Purple | Language model |
| Text | 🔵 Blue | Text with variables |
| Transform | 🟠 Orange | Transform data |
| Filter | 🔷 Cyan | Filter data |
| Condition | 🌸 Pink | Conditional logic |
| Split | 🟢 Green | Split data |
| Merge | 🟡 Yellow | Merge data |

---

## 🔗 Architecture Overview

```
Frontend (React)          Backend (FastAPI)
Port: 3000                Port: 8000
     │                         │
     │  POST /pipelines/parse  │
     ├─────────────────────────▶│
     │                         │
     │  {nodes, edges}         │
     │                         │
     │  {num_nodes,            │
     │   num_edges,            │
     │   is_dag}               │
     │◀────────────────────────┤
     │                         │
```

---

## 📁 Key Files

**Frontend:**
- `src/App.js` - Main app
- `src/ui.js` - Canvas/React Flow
- `src/store.js` - State management
- `src/nodes/BaseNode.js` - Node abstraction
- `src/nodes/textNode.js` - Dynamic text node
- `src/submit.js` - API submission

**Backend:**
- `main.py` - FastAPI app
- `pipeline_service.py` - Business logic
- `graph_utils.py` - DAG detection

---

## 🎬 Next Steps

1. ✅ Get it running (follow steps above)
2. ✅ Test basic functionality (see TEST_SETUP.md)
3. ✅ Explore the code (see CODE_WALKTHROUGH.md)
4. ✅ Create your demo (see DEMO_SCRIPT.md)

---

## 💡 Tips

- Keep both terminals open (backend + frontend)
- Backend must be running before submitting
- Text node is the most impressive feature - demo it!
- All code is clean with no comments
- Architecture is modular and well-organized

---

**Ready? Start with Step 1 above!** 🚀

If you get stuck, check TEST_SETUP.md for troubleshooting.

