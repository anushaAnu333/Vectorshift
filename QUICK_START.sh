#!/bin/bash

echo "🚀 VectorShift Pipeline Editor - Quick Start"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

echo "✅ Prerequisites check passed"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
if [ ! -d "node_modules" ]; then
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
else
    echo "✅ Frontend dependencies already installed"
fi
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
python3 -m pip install -r requirements.txt --quiet
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi
cd ..

echo ""
echo "✅ All dependencies installed!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Start the backend server (Terminal 1):"
echo "   cd backend"
echo "   python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"
echo ""
echo "2. Start the frontend server (Terminal 2):"
echo "   cd frontend"
echo "   npm start"
echo ""
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🎉 Happy coding!"

