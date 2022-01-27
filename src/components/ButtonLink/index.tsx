import { Link } from "react-router-dom";

type ButtonLinkProps = {
  isExternal?: boolean;
  to: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const ButtonLink = (props: ButtonLinkProps) => {
  const className = [props.className];
  if (props.isExternal) {
    return (
      <a href={props.to} className={className.join(" ")} style={props.style}>
        {props.children}
      </a>
    );
  } else {
    return (
      <Link
        to={props.to ?? "#"}
        className={className.join(" ")}
        style={props.style}
      >
        {props.children}
      </Link>
    );
  }
};

export default ButtonLink;
