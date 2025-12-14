# Test Setup - Verify Everything Works

## 🧪 Quick Test Steps

### Test 1: Backend Health Check

Open a terminal and run:
```bash
curl http://localhost:8000/
```

**Expected Result:**
```json
{"Ping":"Pong"}
```

✅ If you see this, backend is working!

---

### Test 2: Frontend Loads

1. Open browser to http://localhost:3000
2. You should see:
   - Toolbar at top with node buttons
   - Canvas area in middle
   - Submit button at bottom

✅ If you see this, frontend is working!

---

### Test 3: Create a Node

1. **Drag** an "Input" node from toolbar onto canvas
2. Node should appear on canvas
3. Node should have:
   - Title: "Input"
   - Form fields (Name, Type)
   - Output handle on right side

✅ If node appears, drag & drop is working!

---

### Test 4: Connect Nodes

1. Drag an "Input" node
2. Drag a "Text" node
3. **Click and drag** from Input's output handle (right side) to Text's input handle (left side)
4. Connection line should appear

✅ If connection appears, connections are working!

---

### Test 5: Text Node Variables

1. Drag a "Text" node
2. Click on the textarea
3. Type: `Hello {{name}}, welcome!`
4. You should see:
   - Input handle appears on left for "name"
   - "Variables: name" displayed below textarea
   - Node height adjusts automatically

✅ If handles appear, dynamic text node is working!

---

### Test 6: Submit Pipeline

1. Create at least 2 nodes
2. Connect them
3. Click "Submit Pipeline" button
4. Modal should open showing:
   - Number of nodes
   - Number of edges
   - Is DAG: Yes/No

✅ If modal appears with results, backend integration is working!

---

## 🐛 Common Issues & Solutions

### Issue: Backend not starting

**Error:**
```
ModuleNotFoundError: No module named 'fastapi'
```

**Solution:**
```bash
cd backend
pip install -r requirements.txt
```

---

### Issue: Frontend not starting

**Error:**
```
Cannot find module 'reactflow'
```

**Solution:**
```bash
cd frontend
npm install
```

---

### Issue: CORS Error

**Error in browser console:**
```
Access to fetch at 'http://localhost:8000/pipelines/parse' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution:**
- Make sure backend is running
- Check that backend/main.py has CORS_ORIGINS = ["http://localhost:3000"]

---

### Issue: "Failed to fetch"

**Error:**
```
Error submitting pipeline: Failed to fetch
```

**Solution:**
1. Check if backend is running: `curl http://localhost:8000/`
2. Make sure backend is on port 8000
3. Check browser console for detailed error

---

## ✅ Complete Test Checklist

Run through this checklist to verify everything:

- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can see toolbar with 9 node types
- [ ] Can drag nodes onto canvas
- [ ] Nodes appear with correct styling
- [ ] Can connect nodes together
- [ ] Text node creates handles for {{variables}}
- [ ] Text node auto-resizes
- [ ] Can edit node properties
- [ ] Submit button works
- [ ] Modal shows results
- [ ] No errors in browser console
- [ ] No errors in backend terminal

---

## 🎯 Expected Behavior Summary

| Action | Expected Result |
|--------|----------------|
| Drag node from toolbar | Node appears on canvas |
| Click node | Can see/edit properties |
| Drag from output handle | Connection line appears |
| Type in Text node | Handles appear for {{vars}} |
| Click Submit | Modal opens with results |
| Backend running | http://localhost:8000/ returns {"Ping":"Pong"} |

---

## 📞 Still Having Issues?

1. **Check both terminals** for error messages
2. **Check browser console** (F12 → Console tab)
3. **Verify ports**:
   - Backend: 8000
   - Frontend: 3000
4. **Restart both servers**:
   - Stop both (Ctrl+C)
   - Start backend first
   - Then start frontend

If all tests pass, you're ready to use the application! 🎉

