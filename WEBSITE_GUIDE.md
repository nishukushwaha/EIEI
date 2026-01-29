# EIEI Website - Complete Page Structure

## Website Overview

Your EIEI website is now complete with all the major pages from the live eieiservices.com website. Here's a complete guide to all pages and their features.

---

## 📄 Pages Created

### 1. **Home Page** (`index.html`)
**Main landing page with complete overview of EIEI services**

- **Hero Carousel** - Fullscreen image carousel with key messages
- **About Section** - Company mission and vision
- **Services Overview** - 6 service cards covering:
  - Early Intervention Services
  - Training & Professional Development
  - Community Programs
  - Family Empowerment
  - Supporting Communities
  - CACFP Sponsorship
- **Special Education Classrooms Section** - Location details and features
- **Testimonials** - Client feedback
- **Image Gallery** - With fullscreen viewer (managed via Google Drive)
- **FAQs** - 6 comprehensive questions and answers
- **Contact Form** - Inquiry form overlay
- **Contact Section** - Full contact information

**Key Features:**
- Responsive design works on all devices
- Dark mode toggle
- Smooth animations and transitions
- Accessible navigation

---

### 2. **Services & Programs Page** (`services.html`)
**Detailed breakdown of all EIEI services**

Services covered:
1. **Early Intervention Services & Behavioral Health**
   - Free to low-cost specialized classrooms
   - Social playgroups
   - Individual behavioral support
   - Speech and occupational therapy
   - In-home and in-school services

2. **Training, Coaching, and Professional Development**
   - Special education law training
   - Inclusive classroom practices
   - Behavior management
   - Director and administrator training
   - Virtual and in-person options

3. **Community Programs & Partnerships**
   - Pre-K Counts partnership
   - Support for 20+ ECE programs
   - Technical assistance
   - Quality improvement initiatives

4. **Family Empowerment & Support**
   - Virtual support groups
   - Parenting workshops
   - Self-care resources
   - Navigation of special education services

5. **Supporting Communities & Partnerships**
   - Partnership development
   - Grant writing support
   - Program evaluation
   - Network convening

6. **CACFP Sponsorship**
   - Administrative support
   - Meal reimbursement
   - Nutrition education
   - Staff training

**Page Features:**
- Detailed descriptions for each service
- Who benefits information
- Tabs for easy navigation
- Color-coded sections
- Clear CTAs

---

### 3. **Career Opportunities Page** (`career-opportunities.html`)
**Comprehensive careers page with job listings and benefits**

**Content Sections:**
- **Why Work at EIEI** - Mission-focused messaging
- **Work-Life Balance** - Highlights 33 days off, flexible scheduling
- **Current Job Openings:**
  - Special Education Teachers ($48K-$49K)
  - Teaching Assistants ($15-$17/hr)
  - Registered Behavior Technicians ($28K-$30K)
  - Speech Language Therapists ($88-$93/hr)
  - Occupational Therapists ($86-$92/hr)

- **Benefits Package:**
  - Medical/Dental Insurance
  - 403(b) Retirement Plan (3% match)
  - Student Loan Forgiveness Program
  - 529 College Savings Plans
  - Life Insurance
  - Productivity Awards
  - Employee Assistance Program

- **Application Form** - Easy-to-use application form
- **Contact Information** - Direct contact for questions

**Features:**
- Job descriptions with salary ranges
- Benefits grid
- Application form
- Direct contact CTA

---

### 4. **Contact Us Page** (`contact-us.html`)
**Dedicated contact page with multiple ways to reach EIEI**

**Contact Methods:**
- **Phone:** 484-566-7311
- **Email:** admin@eiforei.org & info@eiforei.org
- **Address:** 4704 Leiper Street, Philadelphia, PA 19124
- **Social Media:** Facebook & Instagram links

**Page Features:**
- Contact form with validation
- Phone/email/address cards
- Embedded Google Map (shows office location)
- Service areas information
- Social media links
- Success confirmation messages

**Service Areas Listed:**
- In-School Services
- In-Home Services
- Community Programs
- Professional Training

---

### 5. **Admin Portal** (`admin.html`)
**Google Drive integration for image management**

**Features:**
- Google Sign-In authentication
- Drag & drop file upload
- Image preview grid
- Delete functionality
- Upload progress tracking
- Images stored in Google Drive folder

**How to Set Up:**
See `GOOGLE_DRIVE_SETUP.md` for complete instructions

---

## 🎨 Design Features

### Color Scheme
- **Brand Blue** (#2a4175) - Primary color
- **Brand Orange** (#fca311) - Accent color
- **Dark Mode Support** - Automatic theme switching

### Responsive Design
- Mobile-first approach
- All pages work on:
  - Desktop (1920px+)
  - Tablet (768px-1024px)
  - Mobile (320px-767px)

### Interactive Elements
- Navigation menu toggle
- Dark mode toggle
- Smooth animations
- Hover effects
- Form validation
- Success messages

---

## 📱 Navigation Structure

All pages include consistent navigation with links to:
- Home
- Services
- Careers
- Contact
- Dark mode toggle

---

## 🔧 Technical Setup

### Files Included
```
/Users/nishant/Documents/GitHub/EIEI/
├── index.html              (Home page)
├── services.html           (Services details)
├── career-opportunities.html (Careers)
├── contact-us.html         (Contact page)
├── admin.html              (Admin portal for image management)
├── style.css               (All styling)
├── script.js               (JavaScript functionality)
├── GOOGLE_DRIVE_SETUP.md   (Setup instructions)
└── images/                 (Logo and other images)
```

### Dependencies
- Google Fonts (Inter font family)
- Google Drive API (for gallery management)
- No external JavaScript frameworks - vanilla JS only

---

## 🚀 Deployment

To deploy this website:

1. **Update Google Drive Configuration** (if using admin portal)
   - Follow instructions in `GOOGLE_DRIVE_SETUP.md`
   - Add your Folder ID and API keys

2. **Update Contact Information**
   - Replace phone numbers and emails across pages if needed
   - Update address if location changes
   - Update social media links

3. **Add Real Images**
   - Replace logo.png with your logo
   - Add gallery images via admin portal

4. **Host the Website**
   - Upload all files to your web server
   - Ensure `.htaccess` or server config allows file access
   - Test all forms and links

---

## 📝 Forms on Website

### 1. **Inquiry Form** (Home Page)
- Name, Email, Phone, Message
- On submission: Logs to console, shows confirmation

### 2. **Contact Form** (Contact Us Page)
- Name, Email, Phone, Subject, Message
- On submission: Shows success message

### 3. **Career Application Form** (Careers Page)
- Name, Email, Phone, Position, Location
- On submission: Shows confirmation, sends to console

### 4. **Admin Upload Form** (Admin Page)
- Requires Google authentication
- Uploads to Google Drive folder
- Shows upload progress

---

## 🎯 Key Features by Page

| Page | Key Features |
|------|-------------|
| Home | Carousel, Services overview, Gallery, FAQs |
| Services | Detailed service descriptions, eligibility info |
| Careers | Job listings, benefits, application form |
| Contact | Contact form, map, multiple contact methods |
| Admin | Google Drive integration, image management |

---

## 📞 Contact Information

**EIEI Main Contact:**
- Phone: 484-501-9101
- Email: admin@eiforei.org
- Address: 4704 Leiper Street, Philadelphia, PA 19124
- Alternative Phone: 484-566-7311

---

## ✅ Next Steps

1. ✅ Set up Google Drive for image gallery (follow GOOGLE_DRIVE_SETUP.md)
2. ✅ Update logo image (images/logo.png)
3. ✅ Add carousel images (images/slide1.jpg, slide2.jpg, slide3.jpg)
4. ✅ Add gallery images via admin portal
5. ✅ Test all forms and functionality
6. ✅ Deploy to your web hosting
7. ✅ Set up email notifications for form submissions (optional)

---

## 🔒 Security Notes

- Admin portal has Google authentication (secure)
- API key in frontend is read-only (limited access)
- Forms don't send emails automatically (would need backend)
- All data is in localStorage or Google Drive

---

## 📚 Additional Resources

- `GOOGLE_DRIVE_SETUP.md` - Complete Google Drive setup guide
- `style.css` - All styling and responsive design
- `script.js` - Shared JavaScript functionality

---

**Last Updated:** January 27, 2026
**Version:** 1.0
