import styled from "styled-components";

export const ButtonLinkWrapper = styled.div`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  margin: 0.25rem 0.125rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;

  & > a {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
