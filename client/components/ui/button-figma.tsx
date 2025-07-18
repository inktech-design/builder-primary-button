import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Squircle } from "corner-smoothing";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none font-inter h-12 sm:h-14 min-w-12 sm:min-w-14 px-2 sm:px-3 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 ease-out transform-gpu",
  {
    variants: {
      state: {
        default:
          "bg-button-primary text-button-text-primary hover:bg-button-primary-hover hover:text-button-text-primary-hover hover:shadow-lg active:bg-button-primary-pressed active:text-button-text-primary-pressed",
        hover:
          "bg-button-primary-hover text-button-text-primary-hover shadow-lg",
        pressed:
          "bg-button-primary-pressed text-button-text-primary-pressed shadow-md",
        disabled:
          "bg-button-primary-disabled text-button-text-primary-disabled opacity-60 cursor-not-allowed",
        loading:
          "bg-button-primary-loading text-button-text-primary-disabled cursor-wait opacity-80",
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
    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-out"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-300 ease-out"
    />
  </svg>
);

const LoadingSpinner = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 animate-smooth-spin transition-opacity duration-300 ease-out"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25 transition-opacity duration-300"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75 transition-opacity duration-300"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingOnly?: boolean;
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
      style,
      ...props
    },
    ref,
  ) => {
    const finalState = loading ? "loading" : disabled ? "disabled" : state;

    return (
      <button
        className="relative overflow-hidden focus:outline-none"
        ref={ref}
        disabled={disabled || loading}
        style={style}
        {...props}
      >
        <Squircle
          cornerRadius={16}
          cornerSmoothing={0.6}
          className={cn(
            buttonVariants({ state: finalState }),
            "w-full h-full",
            className,
          )}
        >
          {/* Left Icon */}
          {leftIcon && !iconOnly && (
            <div className="transition-all duration-300 ease-out">
              {loading ? <LoadingSpinner /> : <PlusIcon />}
            </div>
          )}

          {/* Content */}
          {!iconOnly && (
            <span className="px-1 sm:px-2 text-sm sm:text-base font-medium leading-5 sm:leading-6 transition-all duration-300 ease-out">
              {children}
            </span>
          )}

          {/* Right Icon */}
          {rightIcon && !iconOnly && (
            <div className="transition-all duration-300 ease-out">
              {loading ? null : <PlusIcon />}
            </div>
          )}

          {/* Icon Only Mode */}
          {iconOnly && (
            <div className="transition-all duration-300 ease-out">
              {loading ? <LoadingSpinner /> : <PlusIcon />}
            </div>
          )}
        </Squircle>
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
