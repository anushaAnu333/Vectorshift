#!/bin/bash

# Git commands to push code to GitHub
# Run this script or copy/paste these commands

# Initialize git (if not already initialized)
git init

# Add all files (documentation files will be excluded by .gitignore)
git add .

# Check what will be committed (optional - to verify)
echo "Files to be committed:"
git status

# Commit the changes
git commit -m "Initial commit: VectorShift Pipeline Editor"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/anushaAnu333/Vectorshift.git

# Push to GitHub
git push -u origin main

echo "✅ Code pushed to GitHub successfully!"

