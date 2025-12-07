# Resend Setup Instructions

To enable the contact form to automatically send emails to iwajuofficial@gmail.com using Resend.

## Steps:

1. **Create Resend Account**
   - Go to https://resend.com/
   - Sign up for a free account (100 emails/day free)

2. **Get API Key**
   - Go to "API Keys" in dashboard
   - Click "Create API Key"
   - Copy your API key

3. **Verify Domain (Optional but Recommended)**
   - Go to "Domains" in dashboard
   - Add your domain
   - Follow DNS setup instructions
   - This allows you to send from your own domain

4. **Set Environment Variable**
   - Create a `.env` file in the `web` folder
   - Add: `VITE_RESEND_API_KEY=your_api_key_here`
   - Replace `your_api_key_here` with your actual Resend API key

5. **Update From Email (After Domain Verification)**
   - Open `web/src/components/Contact.jsx`
   - Find: `from: 'Iwaju Website <onboarding@resend.dev>'`
   - Replace with: `from: 'Iwaju Website <noreply@yourdomain.com>'`
   - Or use your verified domain email

6. **For Production (Recommended)**
   - Create a backend API endpoint (Node.js, Python, etc.)
   - Move the Resend API call to the backend
   - Keep API key secure on server
   - Frontend calls your backend endpoint instead

## Quick Start (Development):

1. Sign up at https://resend.com/
2. Get your API key
3. Create `web/.env` file:
   ```
   VITE_RESEND_API_KEY=re_your_api_key_here
   ```
4. Restart your dev server

The contact form will now automatically send emails to iwajuofficial@gmail.com!

