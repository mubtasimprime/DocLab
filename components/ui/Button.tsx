import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  /** Renders as a Next.js Link when provided, otherwise a native <button> */
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  /** Background preset — "primary" is the blue brand color, "secondary" is pink */
  variant?: ButtonVariant;
  /** Tailwind rounding class, e.g. "rounded-full" or "rounded-lg" */
  rounded?: string;
  /** Extra classes — height, width, padding, margin, etc. Overrides/extends the defaults */
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
};

const Button = ({
  children,
  href,
  icon,
  iconPosition = "right",
  variant = "primary",
  rounded = "rounded-full",
  className = "",
  onClick,
  type = "button",
  target,
  rel,
  disabled = false,
}: ButtonProps) => {
  const classes =
    `inline-flex items-center justify-center gap-3 px-6 py-3 font-roboto text-sm font-bold tracking-wider uppercase transition-colors ${variantClasses[variant]} ${rounded} ${className}`.trim();

  const iconBadge = icon ? (
    <span className="flex h-6 w-6 items-center justify-center rounded-full">
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === "left" && iconBadge}
      {children}
      {iconPosition === "right" && iconBadge}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;
