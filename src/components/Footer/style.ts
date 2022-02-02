import styled from "styled-components";

export const FooterWrapper = styled.footer`
  font-family: "Poppins", sans-serif;
  border-top: 1px solid #e9ecef; // $gray-200;
  padding-top: 20px;

  .brand-tagline {
    margin-top: 8px;
    color: #495057;
    font-weight: 300;
  }

  h6 {
    color: #343a40; //$gray-800;
    font-weight: bold;
  }

  .list-group-item {
    background-color: rgba(0, 0, 0, 0);
    padding: 0.3125rem 0;
    border: 0;
    a,
    span {
      color: #6c757d; //$gray-600;
      font-weight: 300;
    }
    a:hover {
      color: #343a40; //$gray-800;
    }
  }
  .copyrights {
    font-size: 15px;
    margin: 20px 0;
    font-weight: 300;
    color: #6c757d; //$gray-600;

    a {
      font-weight: bold;
      color: crimson;
    }
  }
`;
