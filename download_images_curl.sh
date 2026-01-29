#!/bin/bash

# Download stock images for EIEI website using direct URLs
# Using Unsplash free images with working direct links

IMAGES_DIR="/Users/nishant/Documents/GitHub/EIEI/images/"
mkdir -p "$IMAGES_DIR"

# Array of image downloads - using direct Unsplash URLs
declare -a IMAGES=(
    "about-section.jpg:https://images.unsplash.com/photo-1516534775068-bb8e7b1b93fa?w=800&q=80"
    "service1.jpg:https://images.unsplash.com/photo-1427504494785-cdea0d292c0f?w=800&q=80"
    "service2.jpg:https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    "service3.jpg:https://images.unsplash.com/photo-1552666179-f6a92176da4f?w=800&q=80"
    "service4.jpg:https://images.unsplash.com/photo-1599055731572-27d25148ad31?w=800&q=80"
    "service5.jpg:https://images.unsplash.com/photo-1552058544-f6b08d1f6dc0?w=800&q=80"
    "service6.jpg:https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
    "classroom.jpg:https://images.unsplash.com/photo-1609728226057-bc829c36e65c?w=800&q=80"
    "team.jpg:https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    "workplace.jpg:https://images.unsplash.com/photo-1552058544-f6b08d1f6dc0?w=800&q=80"
    "training.jpg:https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    "contact-hero.jpg:https://images.unsplash.com/photo-1552666179-f6a92176da4f?w=800&q=80"
)

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_FILES=()

echo "Starting image downloads from Unsplash..."
echo "Saving to: $IMAGES_DIR"
echo ""

for item in "${IMAGES[@]}"; do
    IFS=':' read -r filename url <<< "$item"
    
    echo -n "Downloading $filename... "
    
    # Download with curl, follow redirects, get HTTP status code
    http_code=$(curl -L -o "$IMAGES_DIR$filename" -s -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$http_code" = "200" ] && [ -f "$IMAGES_DIR$filename" ]; then
        size=$(stat -f%z "$IMAGES_DIR$filename" 2>/dev/null || echo 0)
        if [ "$size" -gt 30000 ]; then
            size_kb=$((size / 1024))
            echo "✓ Success ($size_kb KB)"
            ((SUCCESS_COUNT++))
        else
            rm -f "$IMAGES_DIR$filename"
            echo "✗ Failed (file too small)"
            FAILED_FILES+=("$filename")
            ((FAILED_COUNT++))
        fi
    else
        rm -f "$IMAGES_DIR$filename" 2>/dev/null
        echo "✗ Failed (HTTP $http_code)"
        FAILED_FILES+=("$filename")
        ((FAILED_COUNT++))
    fi
    
    sleep 0.5
done

# Print summary
echo ""
echo "============================================================"
echo "DOWNLOAD SUMMARY"
echo "============================================================"
echo "Successfully downloaded: $SUCCESS_COUNT/12 images"

if [ $FAILED_COUNT -gt 0 ]; then
    echo "Failed: $FAILED_COUNT/12 images"
    echo ""
    for file in "${FAILED_FILES[@]}"; do
        echo "  ✗ $file"
    done
fi

echo ""
echo "Files in $IMAGES_DIR:"
echo "============================================================"
ls -lh "$IMAGES_DIR"*.jpg 2>/dev/null | awk '{print $9, "(" $5 ")"}'
