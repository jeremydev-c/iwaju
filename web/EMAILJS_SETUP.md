# EmailJS Setup Instructions

To enable the contact form to automatically send emails to iwajuofficial@gmail.com, you need to set up EmailJS (free service).

## Steps:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create Email Service**
   - Go to "Email Services" in dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your email provider)
   - Connect your Gmail account (iwajuofficial@gmail.com)
   - Copy the **Service ID**

3. **Create Email Template**
   - Go to "Email Templates" in dashboard
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: {{subject}}
     
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: iwajuofficial@gmail.com
   - Copy the **Template ID**

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update Contact.jsx**
   - Open `web/src/components/Contact.jsx`
   - Replace these values:
     - `YOUR_SERVICE_ID` → Your Service ID
     - `YOUR_TEMPLATE_ID` → Your Template ID
     - `YOUR_PUBLIC_KEY` → Your Public Key

6. **Install Package**
   ```bash
   cd web
   npm install @emailjs/browser
   ```

That's it! The contact form will now automatically send emails to iwajuofficial@gmail.com.

