# Google Drive Gallery Setup Guide

This guide will help you set up Google Drive integration for the EIEI website gallery.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (name it "EIEI Gallery" or similar)
3. Wait for the project to be created

## Step 2: Enable Google Drive API

1. In the Google Cloud Console, search for "Google Drive API"
2. Click on "Google Drive API"
3. Click "Enable"

## Step 3: Create OAuth 2.0 Credentials

### For Admin Portal (needs write access):
1. Go to "Credentials" in the left sidebar
2. Click "Create Credentials" → "OAuth 2.0 Client ID"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:8000`
   - `https://yourdomain.com` (replace with your actual domain)
   - `https://yourdomain.com/admin.html`
5. Copy the **Client ID** and save it

### For Main Website (read-only):
1. Go to "Credentials" → "Create Credentials" → "API Key"
2. Copy the **API Key** and save it
3. Restrict it to only "Google Drive API"

## Step 4: Create a Google Drive Folder

1. Go to [Google Drive](https://drive.google.com/)
2. Create a new folder called "EIEI Gallery"
3. Right-click the folder → "Get link"
4. Copy the folder ID from the URL
   - URL looks like: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy the `FOLDER_ID_HERE` part

## Step 5: Update Your Website Files

### In `admin.html` (line ~6):
Replace these values:
```javascript
const FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID'; // Paste your folder ID here
const CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // Paste your client ID here
```

### In `index.html` (line ~173):
Replace these values:
```javascript
const GOOGLE_DRIVE_FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID'; // Same folder ID
const PUBLIC_API_KEY = 'YOUR_PUBLIC_API_KEY'; // Paste your API key here
```

## Step 6: Share the Folder (Important!)

The main website needs read access to see images. You have two options:

### Option A: Make folder public (simpler, but anyone can see it)
1. Right-click the folder in Google Drive
2. Click "Share"
3. Change to "Anyone with the link can view"
4. Click "Share"

### Option B: Use Service Account (more secure)
Contact us for help setting this up - requires additional configuration.

## Step 7: Test It!

1. **Admin Portal**: Go to `http://localhost:8000/admin.html`
   - Click "Sign in with Google"
   - Sign in with your Google account
   - Upload some test images
   - Verify they appear in the folder

2. **Main Website**: Go to `http://localhost:8000/`
   - Scroll to gallery section
   - You should see the images you uploaded
   - Click to view fullscreen

## Security Notes

⚠️ **Important:**
- Never commit credentials to Git
- Use environment variables or config files for sensitive data
- The API key on the website is public (that's okay - it's read-only and restricted to Drive API)
- The Client ID in admin.html is also public (that's normal for OAuth)
- Make sure the Google Drive folder is properly secured

## Troubleshooting

### Images not loading
- Check that folder ID is correct
- Make sure the folder is shared/public
- Check browser console for error messages (F12)
- Verify API key is correct

### Upload button not working
- Make sure you've signed in
- Check that Client ID is correct
- Verify permissions in Google Cloud Console

### "Quota exceeded" error
- You may have hit API limits
- Wait a few minutes and try again
- Check your API quota in Google Cloud Console

## Support

If you need help with setup, contact your web developer with:
- Screenshot of error message
- Browser console errors (F12 → Console tab)
- Which step you're stuck on
