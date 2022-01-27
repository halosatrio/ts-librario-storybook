import { Link } from "react-router-dom";
import { ButtonLinkWrapper } from "./style";

type ButtonLinkProps = {
  /**
   * set if the link is refered to external source
   */
  isExternal?: boolean;
  /**
   * destination or href of the link
   */
  to: string;
  /**
   * additional classname props
   */
  className?: string;
  /**
   * additional style props
   */
  styles?: React.CSSProperties;
  /**
   * link children element
   */
  children: React.ReactNode;
};

const ButtonLink = ({
  isExternal,
  to = "#",
  className,
  styles,
  children,
}: ButtonLinkProps) => {
  const classNames = [className];
  if (isExternal) {
    return (
      <ButtonLinkWrapper>
        <a href={to} className={classNames.join(" ")} style={styles}>
          {children}
        </a>
      </ButtonLinkWrapper>
    );
  } else {
    return (
      <ButtonLinkWrapper>
        <Link to={to ?? "#"} className={classNames.join(" ")} style={styles}>
          {children}
        </Link>
      </ButtonLinkWrapper>
    );
  }
};

export default ButtonLink;
