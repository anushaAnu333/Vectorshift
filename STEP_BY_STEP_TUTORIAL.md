# Step-by-Step Tutorial - Your First Pipeline

## Prerequisites
✅ Backend running on port 8000  
✅ Frontend running on port 3000  
✅ Browser open to http://localhost:3000

---

## Tutorial 1: Simple Input → Output Pipeline

### Step 1: Add an Input Node
1. Look at the top toolbar
2. Find the button labeled **"Input"**
3. **Click and hold** on the "Input" button
4. **Drag** it down to the canvas (middle area)
5. **Release** the mouse button

**What you should see:**
- A white box appears on the canvas
- It says "Input" at the top
- It has two fields: "Name:" and "Type:"

### Step 2: Enter Input Node Values
1. **Click** on the Input node (the white box)
2. **Click** in the "Name:" field
3. **Type**: `my_input`
4. **Click** on the "Type:" dropdown
5. **Select**: "Text"

**What you should see:**
- The name field shows "my_input"
- The type dropdown shows "Text"
- A small blue circle appears on the right side (this is the output handle)

### Step 3: Add an Output Node
1. Look at the toolbar again
2. Find the button labeled **"Output"**
3. **Click and hold** on "Output"
4. **Drag** it to the canvas, to the right of the Input node
5. **Release** the mouse button

**What you should see:**
- Another white box appears
- It says "Output" at the top
- It has two fields: "Name:" and "Type:"
- A small blue circle appears on the left side (this is the input handle)

### Step 4: Enter Output Node Values
1. **Click** on the Output node
2. **Click** in the "Name:" field
3. **Type**: `my_output`
4. **Click** on the "Type:" dropdown
5. **Select**: "Text"

### Step 5: Connect the Nodes
1. **Hover** your mouse over the blue circle on the **right side** of the Input node
   - The circle should highlight/get bigger
2. **Click and hold** on that blue circle
3. **Drag** your mouse toward the Output node
   - You'll see a line following your cursor
4. **Hover** over the blue circle on the **left side** of the Output node
   - It should highlight
5. **Release** the mouse button

**What you should see:**
- A blue line connects the two nodes
- The line has an arrow pointing from Input to Output
- The connection is complete!

### Step 6: Submit Your Pipeline
1. **Scroll down** to the bottom of the page
2. **Click** the button labeled **"Submit Pipeline"**
3. Wait a moment (button will say "Processing...")

**What you should see:**
- A popup window (modal) appears
- It shows:
  - ✅ Success icon
  - Number of Nodes: 2
  - Number of Edges: 1
  - Is DAG: Yes ✓
4. **Click** the "Close" button

**Congratulations!** You've created your first pipeline! 🎉

---

## Tutorial 2: Pipeline with Text Node and Variables

### Step 1: Add an Input Node
1. Drag "Input" from toolbar
2. Click on it
3. Name: `user_name`
4. Type: `Text`

### Step 2: Add a Text Node
1. Drag "Text" from toolbar
2. Place it to the right of the Input node
3. **Click** on the Text node
4. **Click** in the large text box
5. **Type**: `Hello {{name}}`

**What happens automatically:**
- An input handle appears on the left side
- Below the text box, you'll see "Variables: name"
- The node gets taller to fit the text

### Step 3: Connect Input to Text Node
1. **Hover** over the blue circle on the right of Input node
2. **Click and drag** to the blue circle on the left of Text node
3. **Release** when the Text node's handle highlights

**Important:** Make sure you connect to the handle on the left side of the Text node (the one that appeared for the variable)

### Step 4: Add an Output Node
1. Drag "Output" from toolbar
2. Place it to the right of the Text node
3. Name: `greeting`
4. Type: `Text`

### Step 5: Connect Text to Output
1. Connect the Text node's output (right side) to Output node's input (left side)

### Step 6: Submit
1. Click "Submit Pipeline"
2. You should see:
   - Number of Nodes: 3
   - Number of Edges: 2
   - Is DAG: Yes ✓

---

## Tutorial 3: Pipeline with Transform

### Step 1: Create Input Node
- Name: `data`
- Type: `Text`

### Step 2: Create Transform Node
1. Drag "Transform" from toolbar
2. Click on it
3. Select Type: `uppercase` from dropdown

### Step 3: Create Output Node
- Name: `result`
- Type: `Text`

### Step 4: Connect Everything
1. Input → Transform
2. Transform → Output

### Step 5: Submit
- Should show 3 nodes, 2 edges, DAG: Yes

---

## Common Mistakes and How to Fix Them

### Mistake 1: "I can't drag nodes from the toolbar"
**Fix:** 
- Make sure you're clicking and **holding** the mouse button
- Don't just click - you need to drag

### Mistake 2: "I can't connect nodes"
**Fix:**
- Make sure you're connecting **output** (right side) to **input** (left side)
- Hover over the handle until it highlights before releasing
- You can't connect input to input or output to output

### Mistake 3: "Text node doesn't create handles"
**Fix:**
- Check your syntax: it must be `{{variable}}` (double curly braces)
- No spaces: `{{name}}` ✅ not `{{ name }}` ❌
- Variable name must start with a letter

### Mistake 4: "Submit button shows error"
**Fix:**
- Make sure backend is running (check terminal)
- Refresh the browser page
- Make sure you have at least one node

### Mistake 5: "I can't see my nodes"
**Fix:**
- Use the minimap (small map in bottom right) to navigate
- Click and drag nodes to move them
- Use zoom controls (bottom left)

---

## Practice Exercises

### Exercise 1: Simple Chain
Create: Input → Transform → Output
- Input name: `text_input`
- Transform type: `lowercase`
- Output name: `result`

### Exercise 2: Text with Two Variables
Create: Two Inputs → Text → Output
- Input 1: `first_name`
- Input 2: `last_name`
- Text: `Hello {{first_name}} {{last_name}}`
- Connect both inputs to the Text node
- Connect Text to Output

### Exercise 3: Filter Pipeline
Create: Input → Filter → Output
- Input: `data`
- Filter condition: `length > 5`
- Output: `filtered_data`

---

## Tips for Success

1. **Take your time** - Don't rush the connections
2. **Hover first** - Always hover over handles to see them highlight
3. **Check syntax** - Text node variables need `{{}}` exactly
4. **Test often** - Submit your pipeline frequently to check it works
5. **Use the minimap** - It helps you see the whole pipeline

---

## What Each Node Does

- **Input**: Where data enters the pipeline
- **Output**: Where data exits the pipeline
- **Text**: Combines text with variables from other nodes
- **Transform**: Changes text (uppercase, lowercase, etc.)
- **Filter**: Only passes data that meets a condition
- **LLM**: Language model operations (pre-configured)
- **Merge**: Combines two inputs into one output
- **Split**: Splits one input into two outputs
- **Condition**: Routes data based on true/false condition

---

## Next Steps

Once you're comfortable with the basics:
1. Try creating more complex pipelines
2. Experiment with different node types
3. Create pipelines with multiple branches
4. Test edge cases (empty pipelines, cycles, etc.)

**Remember:** The goal is to create a valid DAG (Directed Acyclic Graph) - no cycles!

