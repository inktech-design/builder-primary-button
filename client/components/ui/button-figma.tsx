import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none font-inter h-12 sm:h-14 min-w-12 sm:min-w-14 px-2 sm:px-3 py-3 sm:py-4 rounded-2xl text-sm sm:text-base",
  {
    variants: {
      state: {
        default:
          "bg-button-primary text-button-text-primary hover:bg-button-primary-hover hover:text-button-text-primary-hover active:bg-button-primary-pressed active:text-button-text-primary-pressed",
        hover: "bg-button-primary-hover text-button-text-primary-hover",
        pressed: "bg-button-primary-pressed text-button-text-primary-pressed",
        disabled:
          "bg-button-primary-disabled text-button-text-primary-disabled",
        loading:
          "bg-button-primary-loading text-button-text-primary-disabled cursor-wait",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  iconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      state,
      loading = false,
      leftIcon = true,
      rightIcon = true,
      iconOnly = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const finalState = loading ? "loading" : disabled ? "disabled" : state;

    return (
      <button
        className={cn(buttonVariants({ state: finalState }), className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && !iconOnly && (loading ? <LoadingSpinner /> : <PlusIcon />)}

        {/* Content */}
        {!iconOnly && (
          <span className="px-2 text-base font-medium leading-6">
            {children}
          </span>
        )}

        {/* Right Icon */}
        {rightIcon && !iconOnly && (loading ? null : <PlusIcon />)}

        {/* Icon Only Mode */}
        {iconOnly && (loading ? <LoadingSpinner /> : <PlusIcon />)}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
