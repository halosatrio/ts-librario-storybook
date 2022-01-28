import styled from "styled-components";

export const FooterWrapper = styled.footer`
  font-family: "Poppins", sans-serif;
  border-top: 1px solid #e9ecef; // $gray-200;
  padding-top: 20px;

  .brand-tagline {
    margin-top: 8px;
    color: $gray-500;
    font-weight: 300;
  }

  .list-group-item {
    background-color: rgba(0, 0, 0, 0);
    padding: 0.3125rem 0;
    border: 0;
    a,
    span {
      color: #adb5bd; //$gray-500;
      font-weight: 300;
    }
    a {
      @include hover-focus {
        color: #343a40; //$gray-800;
      }
    }
  }
  .copyrights {
    font-size: 15px;
    margin: 20px 0;
    font-weight: 300;
    color: #adb5bd; //$gray-500;
  }
`;
