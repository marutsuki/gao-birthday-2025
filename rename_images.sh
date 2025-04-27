#!/bin/bash

# Create the images directory if it doesn't exist
mkdir -p public/images

# Get a list of files in the public/final directory
files=(public/final/*)

# Copy and rename each file
for i in "${!files[@]}"; do
  # Calculate the 1-based index
  index=$((i+1))
  
  # Get the file extension
  filename="${files[$i]}"
  extension="${filename##*.}"
  
  # Copy the file with the new name
  cp "${files[$i]}" "public/images/image${index}.${extension}"
  
  echo "Copied ${files[$i]} to public/images/image${index}.${extension}"
done

echo "All files copied and renamed successfully!"
