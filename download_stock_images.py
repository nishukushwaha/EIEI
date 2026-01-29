#!/usr/bin/env python3
"""
Download stock images from free services for EIEI website
Uses Unsplash and Pexels APIs for reliable image sourcing
"""

import requests
import os
import time
from pathlib import Path

# Target directory
IMAGES_DIR = "/Users/nishant/Documents/GitHub/EIEI/images/"
Path(IMAGES_DIR).mkdir(parents=True, exist_ok=True)

# Image mapping: filename -> search query
IMAGE_SPECS = {
    "about-section.jpg": "diverse children teachers early childhood education",
    "service1.jpg": "children learning classroom together",
    "service2.jpg": "educators professional training workshop",
    "service3.jpg": "community education program teaching",
    "service4.jpg": "family learning together education",
    "service5.jpg": "community partnership support diverse",
    "service6.jpg": "children eating healthy food nutrition meal",
    "classroom.jpg": "special education classroom children",
    "team.jpg": "diverse team working together collaboration",
    "workplace.jpg": "workplace team culture collaboration",
    "training.jpg": "professional development training session",
    "contact-hero.jpg": "community connection communication diverse",
}

def download_from_unsplash(query, filename):
    """Download image from Unsplash"""
    try:
        # Unsplash API endpoint for random images with search
        url = "https://api.unsplash.com/photos/random"
        params = {
            "query": query,
            "w": 800,
            "h": 600,
            "orientation": "landscape"
        }
        
        response = requests.get(url, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            image_url = data['urls']['regular']
            
            # Download the image
            img_response = requests.get(image_url, timeout=10)
            if img_response.status_code == 200:
                filepath = os.path.join(IMAGES_DIR, filename)
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                return filepath
    except Exception as e:
        print(f"  Unsplash error: {e}")
    return None

def download_from_pexels(query, filename):
    """Download image from Pexels (free, no key needed)"""
    try:
        # Pexels search endpoint
        url = "https://www.pexels.com/api/"
        search_url = f"https://api.pexels.com/v1/search?query={query}&per_page=1&page=1"
        
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
        }
        
        response = requests.get(search_url, headers=headers, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get('photos') and len(data['photos']) > 0:
                photo = data['photos'][0]
                image_url = photo['src']['large']
                
                # Download the image
                img_response = requests.get(image_url, timeout=10)
                if img_response.status_code == 200:
                    filepath = os.path.join(IMAGES_DIR, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_response.content)
                    return filepath
    except Exception as e:
        print(f"  Pexels error: {e}")
    return None

def download_from_pixabay(query, filename):
    """Download image from Pixabay"""
    try:
        url = "https://pixabay.com/api/"
        params = {
            "q": query,
            "key": "free",  # Pixabay allows limited free access
            "image_type": "photo",
            "orientation": "horizontal",
            "min_width": 400,
            "min_height": 300,
            "per_page": 1
        }
        
        response = requests.get(url, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get('hits') and len(data['hits']) > 0:
                image_url = data['hits'][0]['largeImageURL']
                
                # Download the image
                img_response = requests.get(image_url, timeout=10)
                if img_response.status_code == 200:
                    filepath = os.path.join(IMAGES_DIR, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_response.content)
                    return filepath
    except Exception as e:
        print(f"  Pixabay error: {e}")
    return None

def main():
    """Download all images"""
    results = {"success": [], "failed": []}
    
    print("Starting image downloads...")
    print(f"Saving to: {IMAGES_DIR}\n")
    
    for filename, query in IMAGE_SPECS.items():
        print(f"Downloading {filename}...")
        filepath = None
        
        # Try multiple sources
        filepath = download_from_pexels(query, filename)
        if not filepath:
            filepath = download_from_unsplash(query, filename)
        if not filepath:
            filepath = download_from_pixabay(query, filename)
        
        if filepath:
            # Verify file exists and has reasonable size
            file_size = os.path.getsize(filepath)
            if file_size > 50000:  # At least 50KB
                results["success"].append(f"{filename} ({file_size/1024:.1f}KB)")
                print(f"  ✓ Success: {filename} ({file_size/1024:.1f}KB)")
            else:
                os.remove(filepath)
                results["failed"].append(f"{filename} (file too small)")
                print(f"  ✗ Failed: {filename} (file too small)")
        else:
            results["failed"].append(filename)
            print(f"  ✗ Failed: {filename}")
        
        time.sleep(1)  # Rate limiting
    
    # Print summary
    print("\n" + "="*60)
    print("DOWNLOAD SUMMARY")
    print("="*60)
    print(f"Successfully downloaded: {len(results['success'])}")
    for item in results['success']:
        print(f"  ✓ {item}")
    
    if results['failed']:
        print(f"\nFailed: {len(results['failed'])}")
        for item in results['failed']:
            print(f"  ✗ {item}")
    
    print("\n" + "="*60)
    print(f"Total: {len(results['success'])}/{len(IMAGE_SPECS)} images")

if __name__ == "__main__":
    main()
