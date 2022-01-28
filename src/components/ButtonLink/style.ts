import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLinkInternal = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonLinkExternal = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
