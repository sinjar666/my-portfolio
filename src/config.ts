// Portfolio configuration
export const config = {
  // Whether to show the contact form in the Contact section
  // Set to true to display the contact form alongside contact information
  // Set to false to hide the form and show only contact information
  showContactForm: false,

  // Other config options can be added here
  siteTitle: import.meta.env.VITE_SITE_TITLE || "Srijan Mukherjee - Portfolio",
  resumeUrl:
    import.meta.env.VITE_RESUME_URL ||
    "https://github.com/sinjar666/my-resume/releases/download/v20260405-141321/resume.pdf",
  // Add more config as needed
};