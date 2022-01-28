import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  // NavBar
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #e6e6e6; //$gray-200;

  ul.navbar-nav {
    li.nav-item {
      &.active {
        a.nav-link {
          color: $primary;
        }
      }
      a {
        &.nav-link {
          letter-spacing: 1px;
          color: #152c5b; //$gray-900;
          padding-left: 1rem;
          padding-right: 1rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
