import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";

const fieldClasses =
  "w-full rounded-md bg-[#f4f9fc] px-5 py-4 font-roboto text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-secondary/40";

type Option = { label: string; value: string };

type InputFieldProps = {
  as?: "input";
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

type SelectFieldProps = {
  as: "select";
  className?: string;
  placeholder?: string;
  options: Option[];
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "placeholder">;

type TextareaFieldProps = {
  as: "textarea";
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

/** Reusable form control — renders a styled input, select, or textarea via the `as` prop. */
const FormField = (props: FormFieldProps) => {
  if (props.as === "select") {
    const { as: _as, className = "", placeholder, options, ...rest } = props;

    return (
      <div className="relative">
        <select
          defaultValue=""
          className={`${fieldClasses} appearance-none pr-10 ${className}`.trim()}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-primary/40" />
      </div>
    );
  }

  if (props.as === "textarea") {
    const { as: _as, className = "", ...rest } = props;

    return (
      <textarea
        className={`${fieldClasses} resize-none ${className}`.trim()}
        {...rest}
      />
    );
  }

  const { as: _as, className = "", ...rest } = props;

  return <input className={`${fieldClasses} ${className}`.trim()} {...rest} />;
};

export default FormField;
