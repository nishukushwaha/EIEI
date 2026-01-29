#!/usr/bin/env python3
import urllib.request
import json
import os

os.chdir('/Users/nishant/Documents/GitHub/EIEI/images')

searches = {
    'about-section.jpg': 'early childhood education',
    'service1.jpg': 'children in classroom',
    'service2.jpg': 'teacher training workshop',
    'service3.jpg': 'community education program',
    'service4.jpg': 'family learning together',
    'service5.jpg': 'community partnership support',
    'service6.jpg': 'nutrition food program',
    'classroom.jpg': 'classroom with children learning',
    'team.jpg': 'diverse team working',
    'workplace.jpg': 'workplace collaboration',
    'training.jpg': 'professional development',
    'contact-hero.jpg': 'community connection'
}

for filename, query in searches.items():
    try:
        url = f"https://api.unsplash.com/photos/random?query={query}&w=600&h=400"
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0')
        response = urllib.request.urlopen(req, timeout=5)
        data = json.loads(response.read().decode())
        image_url = data['urls']['regular']
        
        urllib.request.urlretrieve(image_url, filename)
        print(f"✓ Downloaded {filename}")
    except Exception as e:
        print(f"✗ {filename}: {str(e)}")
