import styled from "styled-components";

export const InputDateWrapper = styled.div`
  font-weight: 300;
  .input-group {
    background-color: $white;
    .input-group-text {
      pointer-events: none;
      border: 0;
      cursor: pointer;
      padding: 0;
      border-radius: 4px !important;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      background-color: #212529; //$gray-900;
      position: absolute;
      z-index: 999;
    }
    .form-control {
      border: 0;
      border-radius: 0;
      outline: 0;
      box-shadow: none;
      background-color: #f8f9fa; //$gray-100;
      padding: 0.575rem 45px;
      text-align: center;
      justify-content: center;
      width: 100%;
      height: 45px;
    }
  }
`;
