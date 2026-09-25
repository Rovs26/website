export const primaryNavigation = [
  { href: "/for-sellers", label: "For Sellers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
] as const;

export const testingStatusLink = {
  href: "/#testing-status",
  label: "Testing Status",
} as const;

/**
 * The separate KitaMo web app. CLM-010 approves this exact label and
 * destination for the shared header and footer only, as a secondary link:
 * never primary-action styling, and no other web-app copy.
 */
export const webAppSignInLink = {
  href: "https://app.kitamo.online/login",
  label: "Sign in",
} as const;

export const footerCopy = {
  description:
    "An Android app in testing for Filipino small-business owners and sellers, and a web app for store owners at app.kitamo.online.",
} as const;
