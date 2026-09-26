export const primaryNavigation = [
  { href: "/how-it-works", label: "How it works", key: "how" },
  { href: "/for-sellers", label: "For sellers", key: "sellers" },
  { href: "/about", label: "About", key: "about" },
] as const;

export type NavigationKey = (typeof primaryNavigation)[number]["key"];

/**
 * CLM-010: the web app sign-in. Always a secondary link or secondary button,
 * never primary-action styling.
 */
export const webAppSignInLink = {
  href: "https://app.kitamo.online/login",
  label: "Sign in",
} as const;

/**
 * CLM-013: the one primary action on every page. `bago=1` opens the web
 * app's create-account mode.
 */
export const createAccountLink = {
  href: "https://app.kitamo.online/login?bago=1",
  label: "Create free account",
} as const;

/** CLM-025: the web app's public legal and help pages. */
export const helpLinks = [
  { href: "https://app.kitamo.online/privacy", label: "Privacy" },
  { href: "https://app.kitamo.online/terms", label: "Terms" },
  { href: "https://app.kitamo.online/support", label: "Support" },
] as const;
