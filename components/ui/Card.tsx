import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  /** Tailwind shape class for the icon badge, e.g. "rounded-lg" or "rounded-full" */
  iconShape?: string;
  /** Tailwind size classes for the icon badge, e.g. "h-12 w-12" */
  iconSize?: string;
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  /** Tailwind rounding class for the card itself, e.g. "rounded-2xl" */
  rounded?: string;
  /** Extra classes for the card container — width, height, padding, etc. */
  className?: string;
}

const Card = ({
  icon,
  iconShape = "rounded-lg",
  iconSize = "h-12 w-12",
  label,
  title,
  description,
  footer,
  rounded = "rounded-2xl",
  className = "",
}: CardProps) => {
  return (
    <div
      className={`bg-white p-10 shadow-lg ${rounded} ${className}`.trim()}
    >
      <div
        className={`mb-5 flex items-center justify-center bg-primary text-white ${iconSize} ${iconShape}`}
      >
        {icon}
      </div>

      {label && (
        <p className="font-roboto text-sm text-primary/50">{label}</p>
      )}

      <h3 className="mt-1 font-exo text-xl font-bold text-primary">
        {title}
      </h3>

      {description && (
        <div className="mt-4 font-roboto text-sm leading-relaxed text-primary/60">
          {description}
        </div>
      )}

      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );
};

export default Card;
