#!/bin/bash

# Set error handling
set -e

# Define directories
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PDF_DIR="$SCRIPT_DIR"
PUBLIC_DIR="$ROOT_DIR/public"
ASSETS_DIR="$ROOT_DIR/src/assets/images"

echo "Script directory: $SCRIPT_DIR"
echo "Root directory: $ROOT_DIR"
echo "Public directory: $PUBLIC_DIR"
echo "Assets directory: $ASSETS_DIR"

# Create working directory for temporary files
TEMP_DIR="$PDF_DIR/temp_pdf"
mkdir -p "$TEMP_DIR"
echo "Created temporary directory: $TEMP_DIR"

# Create images directory in temp dir
TEMP_IMAGES_DIR="$TEMP_DIR/images"
mkdir -p "$TEMP_IMAGES_DIR"
echo "Created temporary images directory: $TEMP_IMAGES_DIR"

# Copy all images from assets to the images directory
echo "Copying images from assets to temp directory..."
cp -R "$ASSETS_DIR"/* "$TEMP_IMAGES_DIR/"

# Step 1: Copy from source of truth
echo "Copying markdown files from source to temp directory..."
cp "$ROOT_DIR/src/content/docs/linux-for-pirates.md" "$TEMP_DIR/linux-for-pirates-pdf.md"
cp "$ROOT_DIR/src/content/docs/ruby-on-whales.md" "$TEMP_DIR/ruby-on-whales-pdf.md"

# Step 2: Fix image paths - specifically for the '../../assets/images/' format
echo "Fixing image paths..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS requires '' after -i
    # Fix markdown images with relative paths
    sed -i '' 's|../../assets/images/|images/|g' "$TEMP_DIR/linux-for-pirates-pdf.md"
    sed -i '' 's|../../assets/images/|images/|g' "$TEMP_DIR/ruby-on-whales-pdf.md"
else
    # Linux doesn't need the ''
    sed -i 's|../../assets/images/|images/|g' "$TEMP_DIR/linux-for-pirates-pdf.md"
    sed -i 's|../../assets/images/|images/|g' "$TEMP_DIR/ruby-on-whales-pdf.md"
fi

# Step 3: Copy config files to temp directory
echo "Copying config files to temp directory..."
cp "$PDF_DIR/md-pdf-config.json" "$TEMP_DIR/md-pdf-config.json"
cp "$PDF_DIR/pdf-style.css" "$TEMP_DIR/pdf-style.css"

# Step 4: Change to temp directory for PDF generation
echo "Changing to temp directory for PDF generation..."
cd "$TEMP_DIR" || { echo "Failed to change to temp directory"; exit 1; }

# Step 5: Generate PDFs
echo "Generating PDFs..."
npx md-to-pdf --basedir="$TEMP_DIR" --config-file md-pdf-config.json linux-for-pirates-pdf.md
npx md-to-pdf --basedir="$TEMP_DIR" --config-file md-pdf-config.json ruby-on-whales-pdf.md

# Step 6: Move the generated PDFs to public directory
echo "Moving PDFs to public directory..."
if [ -f "linux-for-pirates-pdf.pdf" ]; then
    cp "linux-for-pirates-pdf.pdf" "$PUBLIC_DIR/linux-for-pirates.pdf"
    echo "Created: $PUBLIC_DIR/linux-for-pirates.pdf"
else
    echo "ERROR: linux-for-pirates-pdf.pdf was not generated!"
fi

if [ -f "ruby-on-whales-pdf.pdf" ]; then
    cp "ruby-on-whales-pdf.pdf" "$PUBLIC_DIR/ruby-on-whales.pdf"
    echo "Created: $PUBLIC_DIR/ruby-on-whales.pdf"
else
    echo "ERROR: ruby-on-whales-pdf.pdf was not generated!"
fi

# Cleanup temp directory
echo "Cleaning up..."
cd "$PDF_DIR" || { echo "Failed to change back to PDF directory"; exit 1; }
rm -rf "$TEMP_DIR"

echo "✅ PDF generation process complete!"
echo "Source files were processed from: $ROOT_DIR/src/content/docs"
echo "Images were copied from: $ASSETS_DIR"
echo "PDFs were saved to: $PUBLIC_DIR"