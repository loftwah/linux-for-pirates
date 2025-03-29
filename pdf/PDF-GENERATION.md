# PDF Generation Instructions

This document explains how to generate PDFs from markdown files for Linux for Pirates.

## Requirements

You need to have the following installed:

1. Node.js
2. `md-to-pdf` NPM package (install globally with `npm install -g md-to-pdf`)

## How It Works

The `generate-pdfs.sh` script automates the following process:

1. Copies the latest markdown files from the source of truth (`src/content/docs/`)
2. Fixes image paths (removes leading slashes for local rendering)
3. Generates PDFs using `md-to-pdf`
4. Renames the files to the final output names

## Running the Script

To generate fresh PDFs:

1. Run the script:

```bash
./pdf/generate-pdfs.sh
```

This will create:

- `public/linux-for-pirates.pdf`
- `public/ruby-on-whales.pdf`

## Making Changes

If you need to modify the PDF generation process:

1. **Source files:** The original markdown is in `src/content/docs/`.
2. **Image paths:** The script automatically converts `/images/` to `images/` for local rendering.
3. **Styling:** `md-to-pdf` uses its default styling, which includes syntax highlighting.

## Troubleshooting

If you encounter issues:

- Make sure `md-to-pdf` is installed globally: `npm install -g md-to-pdf`
- Verify the source markdown files exist at `src/content/docs/`
- Check that the `images/` directory contains all required images

For more control over the PDF appearance, you can modify the script to include custom CSS.
