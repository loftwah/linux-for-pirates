#!/bin/bash

# Clean up any leftover files
rm -f enhance-syntax.lua pdf-style.css template.html linux-for-pirates.html ruby-on-whales.html md-pdf-config.json

echo "Starting PDF generation process..."

# Step 1: Copy from source of truth
echo "Copying markdown files from source..."
cp ../src/content/docs/linux-for-pirates.md linux-for-pirates-pdf.md
cp ../src/content/docs/ruby-on-whales.md ruby-on-whales-pdf.md

# Step 2: Fix image paths - remove leading slash
echo "Fixing image paths..."
sed -i '' 's|/images/|images/|g' linux-for-pirates-pdf.md
sed -i '' 's|/images/|images/|g' ruby-on-whales-pdf.md

# Step 3: Generate PDFs
echo "Converting linux-for-pirates-pdf.md to PDF..."
md-to-pdf linux-for-pirates-pdf.md

echo "Converting ruby-on-whales-pdf.md to PDF..."
md-to-pdf ruby-on-whales-pdf.md

# Step 4: Rename the generated files
mv linux-for-pirates-pdf.pdf linux-for-pirates.pdf
mv ruby-on-whales-pdf.pdf ruby-on-whales.pdf

echo "✅ PDF generation complete! PDFs created with clean syntax highlighting."
echo "Source files were copied from src/content/docs/ and image paths were fixed." 