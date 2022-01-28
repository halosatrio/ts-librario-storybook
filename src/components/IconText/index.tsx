import styled from "styled-components";
import ButtonLink from "../ButtonLink";

const IconTextWrapper = styled(ButtonLink)`
  font-size: 26px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #20c997;
  &:hover {
    color: #20c997;
    text-decoration: none;
  }
`;

const IconText = (props: { className?: string }) => {
  const classNames = ["brand-text-icon", props.className];

  return (
    <IconTextWrapper className={classNames.join(" ")} to="/">
      Librario
    </IconTextWrapper>
  );
};

export default IconText;
