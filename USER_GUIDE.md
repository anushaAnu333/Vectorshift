# Complete User Guide - How to Use the Pipeline Editor

## Table of Contents
1. [Getting Started](#getting-started)
2. [Understanding the Interface](#understanding-the-interface)
3. [Creating Nodes](#creating-nodes)
4. [Entering Values in Nodes](#entering-values-in-nodes)
5. [Making Connections](#making-connections)
6. [Complete Example Walkthrough](#complete-example-walkthrough)
7. [Submitting Your Pipeline](#submitting-your-pipeline)

---

## Getting Started

### Step 1: Start the Backend Server
```bash
cd backend
python3 -m uvicorn main:app --reload
```
You should see: `Uvicorn running on http://127.0.0.1:8000`

### Step 2: Start the Frontend
```bash
cd frontend
npm start
```
Your browser should open to `http://localhost:3000`

---

## Understanding the Interface

### Visual Layout:
```
┌─────────────────────────────────────────────────────────┐
│  Node Palette                                          │
│  [Input] [LLM] [Output] [Text] [Transform] ...        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              Canvas Area (React Flow)                  │
│                                                         │
│         ┌─────┐      ┌─────┐      ┌─────┐            │
│         │Node │─────▶│Node │─────▶│Node │            │
│         └─────┘      └─────┘      └─────┘            │
│                                                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│              [Submit Pipeline] Button                   │
└─────────────────────────────────────────────────────────┘
```

### Key Elements:
1. **Top Section**: Node Palette (toolbar) - contains draggable node buttons
2. **Middle Section**: Canvas - where you build your pipeline
3. **Bottom Section**: Submit button - to analyze your pipeline

---

## Creating Nodes

### How to Add a Node:

1. **Find the node type** in the toolbar at the top
   - You'll see buttons: Input, LLM, Output, Text, Transform, Filter, Merge, Split, Condition

2. **Click and drag** the node button from the toolbar

3. **Drop it** anywhere on the canvas

4. **The node appears** on the canvas where you dropped it

### Visual Example:
```
Before:                    After:
┌─────────┐                ┌─────────┐
│ [Input] │  ──drag──▶     │         │
└─────────┘                │  ┌───┐  │
                           │  │ I │  │  ← Node appears
                           │  └───┘  │
                           └─────────┘
```

---

## Entering Values in Nodes

### Different Node Types Have Different Input Fields:

#### 1. Input Node
```
┌─────────────────┐
│     Input       │
├─────────────────┤
│ Name:           │
│ [input_1     ]  │  ← Type here
│                 │
│ Type:           │
│ [Text      ▼]   │  ← Click to select
└─────────────────┘
```

**How to use:**
- Click on the "Name" field and type a name (e.g., "user_name")
- Click on the "Type" dropdown and select "Text" or "File"

#### 2. Text Node
```
┌─────────────────┐
│      Text       │
├─────────────────┤
│ Text:           │
│ ┌─────────────┐ │
│ │Hello {{name}│ │  ← Type here
│ │, welcome!  │ │
│ └─────────────┘ │
│                 │
│ Variables: name │  ← Auto-detected
└─────────────────┘
```

**How to use:**
- Click in the textarea
- Type your text
- Use `{{variable_name}}` to create input handles
- Example: Type "Hello {{user}}, your age is {{age}}"
- The node automatically:
  - Creates input handles for "user" and "age"
  - Adjusts its size based on content
  - Shows detected variables below

#### 3. Transform Node
```
┌─────────────────┐
│    Transform    │
├─────────────────┤
│ Type:           │
│ [uppercase  ▼]  │  ← Click to select
└─────────────────┘
```

**How to use:**
- Click the dropdown
- Select: Uppercase, Lowercase, Reverse, or Trim

#### 4. Filter Node
```
┌─────────────────┐
│     Filter      │
├─────────────────┤
│ Condition:      │
│ [length > 10 ]  │  ← Type condition
└─────────────────┘
```

**How to use:**
- Click in the input field
- Type a condition (e.g., "length > 10", "value != null")

#### 5. Output Node
```
┌─────────────────┐
│     Output      │
├─────────────────┤
│ Name:           │
│ [result     ]   │  ← Type here
│                 │
│ Type:           │
│ [Text      ▼]   │  ← Click to select
└─────────────────┘
```

**How to use:**
- Enter output name
- Select output type

#### 6. LLM Node
```
┌─────────────────┐
│       LLM       │
├─────────────────┤
│ This is a LLM   │
│ node for        │
│ language model  │
│ operations.     │
└─────────────────┘
```

**Note:** LLM node has predefined handles (system, prompt) - no configuration needed

---

## Making Connections

### Understanding Handles:

**Handles are the connection points on nodes:**
- **Left side (blue circles)** = Input handles (target) - receive data
- **Right side (blue circles)** = Output handles (source) - send data

### Visual Representation:
```
        Input Handle    Output Handle
            │                │
            ▼                ▼
        ┌─────┐          ┌─────┐
    ●───│Node │          │Node │───●
        └─────┘          └─────┘
        (Left)           (Right)
```

### How to Connect Nodes:

#### Step-by-Step:

1. **Hover over an output handle** (right side of a node)
   - The handle will highlight

2. **Click and hold** on the output handle
   - You'll see a connection line appear

3. **Drag** to an input handle (left side of another node)
   - The line follows your cursor

4. **Release** when over an input handle
   - The connection is created (you'll see a blue line with arrow)

### Visual Example:
```
Step 1: Hover          Step 2: Click & Drag        Step 3: Release
┌─────┐                ┌─────┐                    ┌─────┐
│Node │───●            │Node │───●                │Node │───●
└─────┘                └─────┘  │                 └─────┘  │
                                │                           │
                                │                           │
                                │                           ▼
                           ┌─────┐                    ┌─────┐
                           │Node │                    │Node │
                           └─────┘                    └─────┘
```

### Connection Rules:

✅ **Valid Connections:**
- Output handle → Input handle
- One output can connect to multiple inputs
- Multiple outputs can connect to one input

❌ **Invalid Connections:**
- Input → Input (not allowed)
- Output → Output (not allowed)
- Node to itself (creates cycle)

### Text Node Special Case:

When you type `{{variable}}` in a Text node:
```
┌─────────────────┐
│      Text       │
├─────────────────┤
│ Text:           │
│ Hello {{name}}  │
└─────────────────┘
     ●              ← Input handle for "name"
   (Left)
```

**To connect:**
1. Drag from another node's output handle
2. Connect to the "name" input handle on the Text node

---

## Complete Example Walkthrough

### Example: Create a Simple Pipeline

**Goal:** Process user input → Transform it → Output result

#### Step 1: Create Input Node
1. Drag "Input" from toolbar
2. Click on the node
3. Enter Name: "user_input"
4. Select Type: "Text"

```
┌─────────────────┐
│     Input       │
│  user_input     │
│  Type: Text     │
└─────────────────┘
         │
         ● (output handle)
```

#### Step 2: Create Transform Node
1. Drag "Transform" from toolbar
2. Click on the node
3. Select Type: "uppercase"

```
┌─────────────────┐
│    Transform    │
│  Type: uppercase │
└─────────────────┘
●                  ●
(input)          (output)
```

#### Step 3: Create Output Node
1. Drag "Output" from toolbar
2. Click on the node
3. Enter Name: "result"
4. Select Type: "Text"

```
┌─────────────────┐
│     Output      │
│  result         │
│  Type: Text     │
└─────────────────┘
●
(input handle)
```

#### Step 4: Connect the Nodes

**Connection 1: Input → Transform**
1. Hover over Input node's output handle (right side)
2. Click and drag
3. Connect to Transform node's input handle (left side)
4. Release

**Connection 2: Transform → Output**
1. Hover over Transform node's output handle (right side)
2. Click and drag
3. Connect to Output node's input handle (left side)
4. Release

### Final Pipeline:
```
┌─────────┐      ┌──────────┐      ┌─────────┐
│ Input   │─────▶│Transform │─────▶│ Output  │
│user_input      │uppercase │      │ result  │
└─────────┘      └──────────┘      └─────────┘
```

---

## Advanced Example: Using Text Node with Variables

### Example: Create a greeting pipeline

#### Step 1: Create Input Node
- Name: "user_name"
- Type: "Text"

#### Step 2: Create Text Node
1. Drag "Text" node
2. Click in the textarea
3. Type: `Hello {{name}}, welcome to {{company}}!`
4. Notice:
   - Two input handles appear (left side)
   - Variables are shown: "name, company"
   - Node size adjusts automatically

#### Step 3: Create Output Node
- Name: "greeting"
- Type: "Text"

#### Step 4: Connect Nodes
1. Connect Input output → Text node's "name" input handle
2. (You could add another input for "company" if needed)
3. Connect Text node output → Output node input

### Visual Result:
```
┌─────────┐
│ Input   │───┐
│user_name│   │
└─────────┘   │
              │
              ▼
         ┌─────────┐
    ●───▶│  Text   │───●
    name │Hello... │
         └─────────┘
              │
              ▼
         ┌─────────┐
         │ Output  │
         │greeting │
         └─────────┘
```

---

## Submitting Your Pipeline

### Step 1: Build Your Pipeline
- Create nodes
- Enter values
- Make connections

### Step 2: Click "Submit Pipeline" Button
- Located at the bottom of the screen
- Button text changes to "Processing..." while analyzing

### Step 3: View Results
A modal appears showing:
- **Number of Nodes**: Count of all nodes
- **Number of Edges**: Count of all connections
- **Is DAG**: 
  - ✅ "Yes" = Valid pipeline (no cycles)
  - ❌ "No" = Invalid pipeline (has cycles)

### Example Results:
```
┌─────────────────────────────┐
│  Pipeline Analysis Results  │
├─────────────────────────────┤
│ ✅ Success!                 │
│                             │
│ Number of Nodes:    3       │
│ Number of Edges:    2       │
│ Is DAG:            Yes ✓    │
│                             │
│ [Close]                     │
└─────────────────────────────┘
```

---

## Tips & Tricks

### 1. Moving Nodes
- Click and drag a node to reposition it
- Nodes snap to a grid for alignment

### 2. Deleting Connections
- Click on a connection line
- Press Delete key (or right-click → Delete)

### 3. Deleting Nodes
- Click on a node
- Press Delete key

### 4. Text Node Variables
- Variables are case-sensitive: `{{Name}}` ≠ `{{name}}`
- Use underscores: `{{user_name}}` (not spaces)
- Variables must start with a letter

### 5. Multiple Connections
- One output can connect to many inputs
- Example: One Input → Multiple Transform nodes

### 6. Viewing the Full Pipeline
- Use the minimap (bottom right) to navigate
- Use zoom controls (bottom left)

---

## Troubleshooting

### Problem: Can't drag nodes from toolbar
**Solution:** Make sure you're clicking and holding, then dragging

### Problem: Can't connect nodes
**Solution:** 
- Make sure you're connecting output (right) to input (left)
- Hover until the handle highlights before releasing

### Problem: Text node not creating handles
**Solution:**
- Check syntax: `{{variable}}` (double curly braces)
- Variable name must be valid (letters, numbers, underscore)
- No spaces in variable name

### Problem: Submit button shows error
**Solution:**
- Make sure backend is running on port 8000
- Check browser console for errors
- Ensure at least one node exists

### Problem: Nodes overlap
**Solution:**
- Click and drag nodes to reposition
- Use the minimap to see the full canvas

---

## Quick Reference

### Node Types:
- **Input**: Data source
- **Output**: Data destination
- **Text**: Text with variables `{{var}}`
- **Transform**: Text transformation (uppercase, etc.)
- **Filter**: Conditional filtering
- **LLM**: Language model operations
- **Merge**: Combine two inputs
- **Split**: Split one input into two outputs
- **Condition**: Branch based on condition

### Keyboard Shortcuts:
- **Delete**: Remove selected node/edge
- **Drag**: Move nodes
- **Scroll**: Zoom in/out

---

## Need Help?

If something doesn't work:
1. Check that both servers are running
2. Refresh the browser
3. Check browser console (F12) for errors
4. Make sure you're using valid connections (output → input)

