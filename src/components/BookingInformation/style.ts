import styled from "styled-components";

export const BookingInformationWrapper = styled.div`
  .card {
    border: none;

    .tag {
      z-index: 3;
      font-size: 0.875rem;
      background-color: #daad59; // $yellow;
      padding: 0.25rem 1.25rem;
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      min-height: 30px;
      border-radius: 0 15px;

      span {
        font-weight: 300;
      }
    }

    .img-wrapper {
      height: 100%;
      margin-bottom: 0;
      border-radius: 0.9375rem;
      overflow: hidden;
    }

    .meta-wrapper {
      font-family: "Poppins" sans-serif;
      margin-top: 1rem;
      h5 {
        color: #343a40; //$gray-800;
        font-size: 1.125rem;
        margin-bottom: 2px;
      }
      span {
        color: #adb5bd; //$gray-500;
        font-size: 0.875rem;
      }
    }
  }
`;
