# Quick Reference Card

## 🚀 Getting Started
```bash
# Terminal 1 - Backend
cd backend && python3 -m uvicorn main:app --reload

# Terminal 2 - Frontend  
cd frontend && npm start
```
Open: http://localhost:3000

---

## 📝 How to Use

### 1. CREATE NODE
```
Toolbar → Click & Hold → Drag → Drop on Canvas
```

### 2. ENTER VALUES
```
Click Node → Type in Fields → Select from Dropdowns
```

### 3. CONNECT NODES
```
Hover Output Handle (right) → Click & Drag → 
Release on Input Handle (left)
```

### 4. SUBMIT
```
Click "Submit Pipeline" Button → View Results
```

---

## 🎯 Node Types

| Node | What It Does | Key Fields |
|------|-------------|-----------|
| **Input** | Data source | Name, Type |
| **Output** | Data destination | Name, Type |
| **Text** | Text with variables | Text (use `{{var}}`) |
| **Transform** | Transform text | Type (dropdown) |
| **Filter** | Filter data | Condition |
| **LLM** | LLM operations | (Pre-configured) |
| **Merge** | Combine 2 inputs | (No config) |
| **Split** | Split 1 to 2 outputs | Delimiter |
| **Condition** | Branch logic | Condition |

---

## 🔗 Connection Rules

✅ **VALID:**
- Output (right) → Input (left)
- One output → Many inputs
- Many outputs → One input

❌ **INVALID:**
- Input → Input
- Output → Output
- Creating cycles

---

## 📐 Text Node Variables

### Syntax:
```
{{variable_name}}
```

### Examples:
```
Hello {{name}}              → Creates handle for "name"
{{first}} and {{last}}      → Creates handles for "first" and "last"
Age: {{age}} years          → Creates handle for "age"
```

### Rules:
- ✅ Use double curly braces: `{{}}`
- ✅ Start with letter: `{{name}}`
- ✅ Can use numbers/underscores: `{{user_1}}`
- ❌ No spaces: `{{ name }}` ❌
- ❌ No special chars: `{{name!}}` ❌

---

## 🎨 Visual Guide

### Handles:
```
● (left)  = INPUT  (receives data)
● (right) = OUTPUT (sends data)
```

### Connection:
```
┌─────┐      ┌─────┐
│Node1│───●──│Node2│
└─────┘      └─────┘
  output → input
```

### Text Node:
```
┌─────────┐
│  Text   │
│Hello    │
│{{name}} │  ← Creates input handle
└─────●───┘
  ●       ●
input   output
```

---

## ⚡ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Delete` | Remove selected node/edge |
| `Drag` | Move node |
| `Scroll` | Zoom in/out |

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't drag nodes | Click and **hold**, then drag |
| Can't connect | Connect output (right) to input (left) |
| Text handles not appearing | Check `{{variable}}` syntax |
| Submit error | Check backend is running |
| Nodes overlap | Click and drag to move |

---

## 📊 Submit Results

### Success:
- ✅ Number of Nodes: X
- ✅ Number of Edges: Y  
- ✅ Is DAG: Yes ✓

### What is DAG?
- **DAG** = Directed Acyclic Graph
- Means: No cycles, valid execution order
- ✅ Good: Linear pipeline
- ❌ Bad: Circular connections

---

## 🎓 Example Pipelines

### Example 1: Simple
```
Input → Transform → Output
```

### Example 2: With Variables
```
Input → Text ({{name}}) → Output
```

### Example 3: Multiple Inputs
```
Input1 ──┐
         ├→ Merge → Output
Input2 ──┘
```

---

## 📚 Full Guides

- **USER_GUIDE.md** - Complete detailed guide
- **VISUAL_GUIDE.md** - Diagrams and visuals
- **STEP_BY_STEP_TUTORIAL.md** - Beginner tutorial

---

## 💡 Pro Tips

1. **Hover first** - Always hover to see handles highlight
2. **Test often** - Submit frequently to check your work
3. **Use minimap** - Bottom right to see full pipeline
4. **Unique names** - Use descriptive node names
5. **Check DAG** - Always verify "Is DAG: Yes" before finishing

---

## 🎯 Quick Test

Try this in 2 minutes:
1. Drag Input → Name: `test`
2. Drag Output → Name: `result`
3. Connect Input → Output
4. Submit → Should show: 2 nodes, 1 edge, DAG: Yes

**Success!** You're ready to build pipelines! 🚀

