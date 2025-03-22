#!/bin/bash

# Clean up any leftover files
rm -f linux-for-pirates.html ruby-on-whales.html linux-for-pirates-pdf.md ruby-on-whales-pdf.md

echo "Starting PDF generation process..."

# Step 1: Copy from source of truth
echo "Copying markdown files from source..."
cp ../src/content/docs/linux-for-pirates.md linux-for-pirates-pdf.md
cp ../src/content/docs/ruby-on-whales.md ruby-on-whales-pdf.md

# Step 2: Fix image paths - remove leading slash
echo "Fixing image paths..."
sed -i '' 's|/images/|images/|g' linux-for-pirates-pdf.md
sed -i '' 's|/images/|images/|g' ruby-on-whales-pdf.md

# Step 3: Ensure custom files exist
# These files should be created separately and not removed during cleanup

# Step 4: Generate PDFs with custom styling
echo "Converting linux-for-pirates-pdf.md to PDF..."
md-to-pdf --config-file md-pdf-config.json linux-for-pirates-pdf.md

echo "Converting ruby-on-whales-pdf.md to PDF..."
md-to-pdf --config-file md-pdf-config.json ruby-on-whales-pdf.md

# Step 5: Rename the generated files
mv linux-for-pirates-pdf.pdf linux-for-pirates.pdf
mv ruby-on-whales-pdf.pdf ruby-on-whales.pdf

echo "✅ PDF generation complete! PDFs created with professional styling."
echo "Source files were copied from src/content/docs/ and image paths were fixed."
echo "Custom styling applied using pdf-style.css and md-pdf-config.json." 