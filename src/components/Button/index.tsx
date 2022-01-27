import { ButtonWrapper } from "./style";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  /**
   * Checks if the button should be disabled
   */
  isDisabled?: boolean;
  /**
   * button Primary styling: blue
   */
  isPrimary?: boolean;
  /**
   * button Light styling: almost white
   */
  isLight?: boolean;
  /**
   * button Loading State
   */
  isLoading?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isBlock?: boolean;
  hasShadow?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLight) className.push("btn-light");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  return (
    <ButtonWrapper
      className={className.join(" ")}
      style={props.style}
      onClick={props.onClick}
      disabled={props.isLoading || props.isDisabled}
    >
      {props.isLoading ? "Loading..." : props.children}
    </ButtonWrapper>
  );
};

export default Button;
