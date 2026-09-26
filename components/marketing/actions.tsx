import {
  createAccountLink,
  webAppSignInLink,
} from "@/lib/content/site-navigation";
import { classNames } from "@/lib/utilities/class-names";

const sizeClasses = {
  compact: "min-h-11 px-3.5 py-1 text-[0.9375rem] leading-[1.15]",
  header: "h-12 px-5 text-base",
  large:
    "min-h-14 px-4 py-2 text-lg wide:min-h-[3.75rem] wide:px-8 wide:text-[1.1875rem]",
} as const;

const shared =
  "rounded-control inline-flex items-center justify-center text-center whitespace-nowrap no-underline transition-[background-color,transform] duration-fast ease-standard active:scale-[.97] motion-reduce:transition-none motion-reduce:active:scale-100";

type ActionProps = {
  className?: string;
  size?: keyof typeof sizeClasses;
};

/** CLM-013: the page's one primary action. */
export function CreateAccountLink({ className, size = "large" }: ActionProps) {
  return (
    <a
      className={classNames(
        shared,
        "bg-action text-action-foreground hover:bg-action-hover active:bg-action-press font-bold hover:text-white",
        sizeClasses[size],
        className,
      )}
      href={createAccountLink.href}
    >
      {createAccountLink.label}
    </a>
  );
}

/** CLM-010: Sign in stays secondary, never primary-action styling. */
export function SignInButton({ className, size = "large" }: ActionProps) {
  return (
    <a
      className={classNames(
        shared,
        "border-border-strong bg-surface text-text hover:bg-muted active:bg-pressed hover:text-text border font-[650]",
        sizeClasses[size],
        className,
      )}
      href={webAppSignInLink.href}
    >
      {webAppSignInLink.label}
    </a>
  );
}
