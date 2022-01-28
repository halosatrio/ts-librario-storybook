import { ButtonLinkExternal, ButtonLinkInternal } from "./style";

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
      <ButtonLinkInternal
        href={to}
        className={classNames.join(" ")}
        style={styles}
      >
        {children}
      </ButtonLinkInternal>
    );
  } else {
    return (
      <ButtonLinkExternal
        to={to ?? "#"}
        className={classNames.join(" ")}
        style={styles}
      >
        {children}
      </ButtonLinkExternal>
    );
  }
};

export default ButtonLink;
