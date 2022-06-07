import { ButtonWrapper } from "./style";

type ButtonProps = {
  /**
   * onclick function props
   */
  onClick?: () => void;
  /**
   * additional classname props
   */
  className?: string;
  /**
   * Checks if the button should be disabled
   */
  isDisabled?: boolean;
  /**
   * button variant primary or light
   * primary styling: blue
   * light styling: almost white 
   */
  variant?: "primary" | "light";
  /**
   * button Loading State
   */
  isLoading?: boolean;
  /**
   * choose one of the button sizes
   */
  size?: "sm" | "md" | "lg";
  /**
   * to set button display: block
   */
  isBlock?: boolean;
  /**
   * to give the button shadow properties
   */
  hasShadow?: boolean;
  /**
   * additional css style props
   */
  styles?: React.CSSProperties;
  /**
   * button children element
   */
  children: React.ReactNode;
};

const Button = ({
  onClick,
  className,
  isDisabled,
  isLoading,
  variant = "primary",
  size = "md",
  isBlock,
  hasShadow,
  children,
  styles,
}: ButtonProps) => {
  const classNames = [className];

  if (variant === 'primary') classNames.push("btn-primary");
  if (variant === 'light') classNames.push("btn-light");
  if (size === "lg") classNames.push("btn-lg");
  if (size === "sm") classNames.push("btn-sm");
  if (isBlock) classNames.push("btn-block");
  if (hasShadow) classNames.push("btn-shadow");

  return (
    <ButtonWrapper
      className={classNames.join(" ")}
      style={styles}
      onClick={onClick}
      disabled={isLoading || isDisabled}
    >
      {isLoading ? "Loading..." : children}
    </ButtonWrapper>
  );
};

export default Button;
