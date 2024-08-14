import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  /**
   * primary
   */
  variant?: "primary" | "secondary";
  /**
   * size
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles[`button--${size}`]]: size,
        [styles[`button--${variant}`]]: variant,
      })}
      {...props}>
      {label}
    </button>
  );
};
