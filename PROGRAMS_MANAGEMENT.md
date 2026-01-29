# Programs Management System - Setup Guide

## Overview

The EIEI website now features a complete programs management system that allows administrators to:
- Add, edit, and delete educational programs
- Manage program details through an intuitive admin portal
- Create dedicated pages for each program
- Store program data persistently

## Files Created/Modified

### New Files
- **admin-programs.html** - Enhanced admin portal with program management
- **program.html** - Template for individual program pages

### Modified Files
- **services.html** - Updated with links to individual program pages
- **script.js** - Added automatic theme switching and programs management

## How to Use

### 1. Access the Admin Portal

Visit `admin-programs.html` in your browser and sign in with Google to access the admin portal.

The portal has two tabs:
- **Programs** - Manage all educational programs
- **Gallery Images** - Upload and manage gallery images

### 2. Add a New Program

1. Click the "+ Add New Program" button
2. Fill in the following fields:
   - **Program Name** - Title of the program (required)
   - **Program ID** - Unique identifier (required, e.g., "early-intervention")
   - **Age Range** - Target age group (optional, e.g., "Ages 3-5")
   - **Description** - Main program description (required)
   - **What We Provide** - List of services (add/remove items as needed)
   - **Who Benefits** - Target audience (add/remove items as needed)
   - **Location** - Physical location or service area
   - **Image URL** - Link to program image/SVG

3. Click "Save Program"

### 3. Edit a Program

1. Find the program in the Programs list
2. Click the "Edit" button on the program card
3. Modify any fields
4. Click "Save Program"

### 4. Delete a Program

1. Find the program in the Programs list
2. Click the "Delete" button
3. Confirm deletion

### 5. View Program Details

Each program has its own dedicated page accessible via `program.html?id=PROGRAM_ID`

Examples:
- `program.html?id=early-intervention`
- `program.html?id=training-development`
- `program.html?id=community-programs`
- `program.html?id=family-empowerment`
- `program.html?id=partnerships`
- `program.html?id=cacfp`

## Program Data Structure

Programs are stored in localStorage with the following structure:

```javascript
{
  id: "unique-id",
  name: "Program Name",
  ageRange: "Ages 3-5",
  description: "Program description...",
  provides: [
    "Service 1",
    "Service 2",
    "Service 3"
  ],
  benefits: [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ],
  location: "Address or service area",
  imageUrl: "URL to image/SVG"
}
```

## Default Programs

The system comes with 6 default programs:

1. **Early Intervention Services** (`early-intervention`)
   - Ages 3-5
   - Free to low-cost specialized classrooms and support services

2. **Training & Professional Development** (`training-development`)
   - Staff training and professional development

3. **Community Programs & Partnerships** (`community-programs`)
   - Partnership with Pre-K Counts program

4. **Family Empowerment & Support** (`family-empowerment`)
   - Virtual support groups and family services

5. **Supporting Communities & Partnerships** (`partnerships`)
   - Non-profit and organizational partnerships

6. **CACFP Sponsorship** (`cacfp`)
   - Child and Adult Care Food Program administration

## Features

### Automatic Theme Switching
The website automatically switches between light and dark modes based on time of day:
- **Light Mode**: 6 AM - 6 PM
- **Dark Mode**: 6 PM - 6 AM

Users can manually toggle the theme, which disables automatic switching until the page is refreshed.

### Program Pages
Each program page includes:
- Full-width header image with overlay
- Program title and description
- Complete list of services provided
- Benefits grid layout
- Location information
- Responsive design for mobile and desktop
- Sidebar with quick information

### Gallery Management
Admin can upload images to Google Drive for use on the website:
- Drag and drop upload support
- Multiple file upload
- Image preview grid
- Delete functionality
- Real-time image management

## Google Drive Setup (Optional)

To enable Google Drive integration for gallery images:

1. Create a Google Cloud project at https://console.cloud.google.com
2. Create OAuth 2.0 credentials (Web application)
3. In `admin-programs.html`, replace:
   - `CLIENT_ID` with your Google OAuth client ID
   - `GALLERY_FOLDER_ID` with your Google Drive folder ID
4. Create a folder in Google Drive for gallery images
5. Share the folder or grant access as needed

Note: The system currently saves program data to localStorage. For production use with Google Drive backend storage, additional API integration would be needed.

## Data Persistence

Currently, program data is stored in the browser's localStorage. This means:
- Data persists across browser sessions
- Data is specific to each browser/device
- Data is not synced across devices

For production/team use, consider:
- Integrating with Google Drive API for cloud storage
- Using a backend database
- Implementing user authentication per team member

## Navigation

Services page automatically displays all programs with links to their detail pages:
- Each program card shows a preview and description
- "Learn More" button links to the dedicated program page
- Services page aggregates all program information

## Contact Page Link

All program pages include a "Get Started Today" call-to-action that links to the contact page for program inquiries.

## Mobile Responsiveness

All pages are fully responsive:
- Program header adjusts for mobile devices
- Content stacks properly on small screens
- Images scale appropriately
- Touch-friendly buttons and navigation

## Troubleshooting

### Programs not loading
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Ensure localStorage is enabled in browser
- Refresh the page

### Images not displaying
- Verify image URL is correct and accessible
- Check that the image file exists
- Ensure CORS is properly configured if using external images

### Google Drive upload not working
- Verify CLIENT_ID and GALLERY_FOLDER_ID are set correctly
- Check Google API settings and permissions
- Ensure OAuth consent screen is configured
- Verify folder ID is correct and accessible

## Future Enhancements

Potential improvements for the system:
1. Google Drive backend storage for programs
2. Multi-user collaboration with user roles
3. Program scheduling/availability management
4. Program pricing and enrollment system
5. Automatic backup and versioning
6. Content rich editor for descriptions
7. Video/media support for programs
8. Program analytics and tracking

