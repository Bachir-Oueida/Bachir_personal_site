#!/bin/bash

echo "🚀 Starting deployment process..."

# Clear any existing build cache
echo "🧹 Clearing build cache..."
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Connect your repository to Vercel"
    echo "3. Deploy!"
else
    echo "❌ Build failed!"
    exit 1
fi 