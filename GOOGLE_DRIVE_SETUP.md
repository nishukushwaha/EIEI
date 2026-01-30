# Troubleshooting “400 Bad Request” for Google Sign-In

If you encounter a 400 error during Google Sign-In, follow this checklist:

## Browser Troubleshooting
- **Clear browser cache and cookies** (for “All time”)
- **Try Incognito/Private mode**
- **Disable all browser extensions** and try again
- **Try a different browser** (Chrome, Firefox, Edge, Safari)
- **Check your computer’s date and time** (should be correct and auto-synced)
- **Flush DNS cache**
   - Mac: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
   - Windows: `ipconfig /flushdns`
- **Check your internet connection** (should be stable)

## Developer/Configuration Troubleshooting
- **OAuth client type:** Must be “Web application” in Google Cloud Console
- **Authorized JavaScript origins:** Must include your site (e.g., `http://localhost:8000`, `https://yourdomain.com`)
- **Authorized redirect URIs:** Must be correct (if used)
- **Client ID:** Must match exactly in your code and Cloud Console
- **OAuth consent screen:** Must be published and all required fields filled
- **Google Drive API:** Must be enabled for your project
- **Folder ID:** Use only the folder ID, not the full URL
- **API scope:** Should be `https://www.googleapis.com/auth/drive.file`
- **Token flow:** Use access token from OAuth2 flow, not ID token
- **No iframes:** Do not embed Google Sign-In in an iframe from another domain
- **Check for quota issues** in Google Cloud Console (rare)

## If the Error Persists
- **Check the browser console** for a detailed error message (e.g., “origin_mismatch”, “redirect_uri_mismatch”)
- **Share the exact error message** for more targeted help

---
# Troubleshooting 400 Errors on Google Sign-In

If you see a 400 error when signing in with Google, check the following:

## 1. OAuth Client Setup
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Navigate to **APIs & Services > Credentials**
- Your OAuth 2.0 Client ID must be of type **Web application**
- The **Authorized redirect URIs** must include:
   - `http://localhost:8000/admin.html` (for local testing)
   - Your production URL, e.g. `https://yourdomain.com/admin.html`
- The **Client ID** in your code must match the one shown in the Cloud Console

## 2. OAuth Consent Screen
- Go to **APIs & Services > OAuth consent screen**
- Make sure the consent screen is **published**
- Fill in all required fields (app name, support email, developer contact)

## 3. Folder ID Usage
- In your code, use only the folder ID (e.g. `1bjif6GZ65LnWx_X3vOnWR-xGeQHmC0N_`), not the full Google Drive URL

## 4. API Scopes
- The scope in your code should match the API you need, e.g. `https://www.googleapis.com/auth/drive.file`

## 5. Token Flow
- Use the access token from the OAuth2 flow for Drive API calls
- Do **not** use the ID token from the Google Identity Services sign-in for Drive API

## 6. API Enabled
- Make sure **Google Drive API** is enabled for your project in the Cloud Console

---
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
6. 35109919396-prtb83ncq3t7j7h4c3qg1bs6q9e8hgkl.apps.googleusercontent.com

### For Main Website (read-only):
1. Go to "Credentials" → "Create Credentials" → "API Key"
2. Copy the **API Key** and save it
API : AIzaSyCrNI5O5pL4aUYznAXq7LYCczvJ1fCBDzw
3. Restrict it to only "Google Drive API"

## Step 4: Create a Google Drive Folder

1. Go to [Google Drive](https://drive.google.com/)
2. Create a new folder called "EIEI Gallery"
3. Right-click the folder → "Get link"
4. Copy the folder ID from the URL
   - URL looks like: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy the `https://drive.google.com/drive/folders/1bjif6GZ65LnWx_X3vOnWR-xGeQHmC0N_?usp=share_link` part

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
