/**
 * Central place for site-wide content & links.
 * Edit these values to customize the site — no need to touch components.
 */

export const siteConfig = {
  name: "7skynetwork",
  domain: "7skynetwork.net",
  url: "https://7skynetwork.net",
  email: "hello@7skynetwork.net",
  // Replace these placeholder URLs with your real profiles
  socials: {
    instagram: "https://instagram.com/7skynetwork",
    tiktok: "https://tiktok.com/@7skynetwork",
    linkedin: "https://linkedin.com/company/7skynetwork",
    youtube: "https://youtube.com/@7skynetwork",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
