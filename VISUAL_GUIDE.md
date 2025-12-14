# Visual Guide - Step by Step with Diagrams

## 1. Initial Screen Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Node Palette                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │Input │ │ LLM  │ │Output│ │ Text │ │Trans │ │Filter│ ...      │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│                    Canvas Area (Empty)                             │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                    [Submit Pipeline]                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. Dragging a Node from Toolbar

### Step 1: Click and Hold
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Node Palette                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │Input │ │ LLM  │ │Output│ │ Text │                              │
│  └──────┘ └──────┘ └──────┘ └──────┘                              │
│    ↑                                                               │
│    │ (Mouse pressed here)                                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│                    Canvas Area                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Step 2: Drag to Canvas
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Node Palette                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │Input │ │ LLM  │ │Output│ │ Text │                              │
│  └──────┘ └──────┘ └──────┘ └──────┘                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│                    Canvas Area                                     │
│                                                                     │
│                            ┌──────┐                                │
│                            │Input │  ← Dragging...                 │
│                            └──────┘                                │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Step 3: Release Mouse
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Node Palette                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                              │
│  │Input │ │ LLM  │ │Output│ │ Text │                              │
│  └──────┘ └──────┘ └──────┘ └──────┘                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│                    Canvas Area                                     │
│                                                                     │
│                            ┌─────────────┐                         │
│                            │   Input     │  ← Node placed          │
│                            │             │                         │
│                            │ Name:       │                         │
│                            │ [        ]  │                         │
│                            │             │                         │
│                            │ Type:       │                         │
│                            │ [Text   ▼]  │                         │
│                            │             │                         │
│                            └───────●─────┘                         │
│                                    │                                │
│                                    ● (output handle)                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Entering Values in a Node

### Input Node - Before Clicking:
```
┌─────────────┐
│   Input     │
├─────────────┤
│ Name:       │
│ [        ]  │  ← Empty field
│             │
│ Type:       │
│ [Text   ▼]  │
└─────────────┘
```

### Input Node - After Entering Values:
```
┌─────────────┐
│   Input     │
├─────────────┤
│ Name:       │
│ [user_name] │  ← You typed this
│             │
│ Type:       │
│ [Text   ▼]  │  ← Selected from dropdown
└─────────────┘
```

### Text Node - Typing with Variables:
```
Step 1: Start typing
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │  ← Typing...
│ └─────────┘ │
└─────────────┘
```

```
Step 2: Add variable
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │
│ │{{name}} │ │  ← Added {{name}}
│ └─────────┘ │
│             │
│ Variables:  │
│ name        │  ← Auto-detected
└─────────────┘
     ●         ← Input handle created
```

```
Step 3: Multiple variables
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │
│ │{{name}},│ │
│ │welcome  │ │
│ │to       │ │
│ │{{company│ │
│ │}}!      │ │
│ └─────────┘ │
│             │
│ Variables:  │
│ name, company│
└─────────────┘
  ●     ●      ← Two input handles
```

---

## 4. Making Connections

### Understanding Handles:

```
        INPUT HANDLE          OUTPUT HANDLE
        (Left side)           (Right side)
            │                      │
            ▼                      ▼
        ┌─────────┐            ┌─────────┐
    ●───│  Node   │            │  Node   │───●
        └─────────┘            └─────────┘
     Receives data          Sends data
```

### Connection Process:

#### Step 1: Hover over Output Handle
```
┌─────────┐
│  Input  │
│user_name│
└─────●───┘
      ↑
   (Hover here - handle highlights)
```

#### Step 2: Click and Drag
```
┌─────────┐
│  Input  │
│user_name│
└─────●───┘
      │
      │  ────────────┐
      │              │
      │              ▼
              ┌──────────┐
              │ Transform│
              └──────────┘
```

#### Step 3: Drag to Input Handle
```
┌─────────┐
│  Input  │
│user_name│
└─────●───┘
      │
      │  ────────────┐
      │              │
      │              ▼
              ┌──────────┐
         ●───│ Transform│
              └──────────┘
              ↑
         (Hover over input handle)
```

#### Step 4: Release - Connection Made
```
┌─────────┐
│  Input  │
│user_name│
└─────●───┘
      │
      │  ────────────▶
      │              │
      │              ▼
              ┌──────────┐
         ●───▶│ Transform│
              └──────────┘
              (Blue line with arrow)
```

---

## 5. Complete Pipeline Example

### Simple Pipeline: Input → Transform → Output

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Step 1: Create Input Node                                 │
│  ┌─────────────┐                                           │
│  │   Input     │                                           │
│  │ user_input  │                                           │
│  │ Type: Text  │                                           │
│  └───────●─────┘                                           │
│          │                                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Step 2: Create Transform Node                             │
│  ┌─────────────┐                                           │
│  │   Input     │                                           │
│  │ user_input  │                                           │
│  └───────●─────┘                                           │
│          │                                                  │
│          │                                                  │
│          ▼                                                  │
│  ┌─────────────┐                                           │
│  │  Transform  │                                           │
│  │  uppercase  │                                           │
│  └───────●─────┘                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Step 3: Create Output Node                                │
│  ┌─────────────┐                                           │
│  │   Input     │                                           │
│  │ user_input  │                                           │
│  └───────●─────┘                                           │
│          │                                                  │
│          │                                                  │
│          ▼                                                  │
│  ┌─────────────┐                                           │
│  │  Transform  │                                           │
│  │  uppercase  │                                           │
│  └───────●─────┘                                           │
│          │                                                  │
│          │                                                  │
│          ▼                                                  │
│  ┌─────────────┐                                           │
│  │   Output    │                                           │
│  │   result    │                                           │
│  │ Type: Text  │                                           │
│  └─────────────┘                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Final Connected Pipeline:                                 │
│                                                             │
│  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐│
│  │   Input     │─────▶│  Transform  │─────▶│   Output    ││
│  │ user_input  │      │  uppercase  │      │   result    ││
│  └─────────────┘      └─────────────┘      └─────────────┘│
│                                                             │
│  [Submit Pipeline]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Text Node with Variables - Detailed

### Creating a Text Node with Variables:

```
Step 1: Empty Text Node
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │         │ │  ← Empty
│ └─────────┘ │
└─────────────┘
     ●          ← One output handle
```

```
Step 2: Type "Hello"
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │  ← Text entered
│ └─────────┘ │
└─────────────┘
     ●
```

```
Step 3: Add {{name}}
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │
│ │{{name}} │ │  ← Variable added
│ └─────────┘ │
│             │
│ Variables:  │
│ name        │  ← Detected
└─────────────┘
  ●            ← Input handle for "name"
     ●        ← Output handle
```

```
Step 4: Add more text and another variable
┌─────────────┐
│    Text     │
├─────────────┤
│ Text:       │
│ ┌─────────┐ │
│ │Hello    │ │
│ │{{name}},│ │
│ │your age │ │
│ │is       │ │
│ │{{age}}  │ │
│ └─────────┘ │
│             │
│ Variables:  │
│ name, age   │  ← Both detected
└─────────────┘
  ●     ●      ← Two input handles
     ●        ← Output handle
```

### Connecting to Text Node Variables:

```
┌─────────────┐
│   Input     │
│ user_name   │
└───────●─────┘
        │
        │ Connect to "name"
        │
        ▼
┌─────────────┐
│    Text     │
│Hello {{name}│
│, age {{age}}│
└───────●─────┘
  ●     │
  │     │
  │     │ Connect to "age"
  │     │
  │     ▼
  │ ┌─────────────┐
  │ │   Input     │
  │ │ user_age    │
  │ └─────────────┘
  │
  └─ (Another input for "age")
```

---

## 7. Submit and Results

### Before Submitting:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────┐      ┌──────────┐      ┌─────────┐           │
│  │ Input   │─────▶│Transform │─────▶│ Output │           │
│  └─────────┘      └──────────┘      └─────────┘           │
│                                                             │
│                                                             │
│                    [Submit Pipeline]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Clicking Submit:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────┐      ┌──────────┐      ┌─────────┐           │
│  │ Input   │─────▶│Transform │─────▶│ Output │           │
│  └─────────┘      └──────────┘      └─────────┘           │
│                                                             │
│                                                             │
│                    [Processing...]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Results Modal Appears:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────┐      ┌──────────┐      ┌─────────┐           │
│  │ Input   │─────▶│Transform │─────▶│ Output │           │
│  └─────────┘      └──────────┘      └─────────┘           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Pipeline Analysis Results              [×]         │  │
│  ├─────────────────────────────────────────────────────┤  │
│  │                                                     │  │
│  │              ✅ Success!                           │  │
│  │                                                     │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  │  │
│  │  │   Nodes      │  │   Edges     │  │ Is DAG   │  │  │
│  │  │      3       │  │      2      │  │   Yes ✓  │  │  │
│  │  └──────────────┘  └──────────────┘  └──────────┘  │  │
│  │                                                     │  │
│  │  Note: A DAG means your pipeline has no cycles     │  │
│  │  and can be executed in a valid order.             │  │
│  │                                                     │  │
│  │                    [Close]                          │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Common Connection Patterns

### Pattern 1: Linear Pipeline
```
Input → Transform → Filter → Output
┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐
│Input│───▶│Trans│───▶│Filt │───▶│Out  │
└─────┘    └─────┘    └─────┘    └─────┘
```

### Pattern 2: Split (One to Many)
```
        ┌─────┐
        │Input│
        └──●──┘
           │
      ┌────┴────┐
      │         │
      ▼         ▼
  ┌─────┐   ┌─────┐
  │Out1 │   │Out2 │
  └─────┘   └─────┘
```

### Pattern 3: Merge (Many to One)
```
  ┌─────┐   ┌─────┐
  │In1  │   │In2  │
  └──●──┘   └──●──┘
     │         │
     └────┬────┘
          │
          ▼
      ┌─────┐
      │Out  │
      └─────┘
```

### Pattern 4: Text Node with Multiple Variables
```
┌─────┐      ┌─────┐
│In1  │───┐  │In2  │───┐
└─────┘   │  └─────┘   │
          │            │
          ▼            ▼
      ┌─────────────┐
      │    Text     │
      │{{var1}} and │
      │{{var2}}     │
      └───────●─────┘
              │
              ▼
          ┌─────┐
          │Out  │
          └─────┘
```

---

## 9. Node Handle Positions

### Single Handle (Default):
```
┌─────────┐
│  Node   │
└─────●───┘
     │
  (50% from top)
```

### Two Handles (Evenly Spaced):
```
┌─────────┐
│  Node   │
└─────●───┘
  ●   │
  │   │
(33%) (67%)
```

### Three Handles:
```
┌─────────┐
│  Node   │
└─────●───┘
  ●   │   ●
  │   │   │
(25%)(50%)(75%)
```

---

## 10. Error States

### Invalid Connection Attempt:
```
┌─────┐
│Node1│───●
└─────┘   │
          │  ❌ Can't connect
          │     output to output
          │
┌─────┐   │
│Node2│───●
└─────┘
```

### Valid Connection:
```
┌─────┐
│Node1│───●
└─────┘   │
          │  ✅ Valid
          │     output to input
          │
          ▼
      ┌─────┐
      │Node2│
      └─────┘
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────┐
│  HOW TO USE                            │
├─────────────────────────────────────────┤
│                                        │
│  1. DRAG: Click & drag from toolbar   │
│  2. DROP: Release on canvas           │
│  3. EDIT: Click node, type values      │
│  4. CONNECT: Drag from ● to ●         │
│  5. SUBMIT: Click button at bottom    │
│                                        │
│  HANDLES:                              │
│  ● (left)  = Input (receives)         │
│  ● (right) = Output (sends)            │
│                                        │
│  TEXT NODE:                            │
│  Type {{variable}} to create handles  │
│                                        │
└─────────────────────────────────────────┘
```

