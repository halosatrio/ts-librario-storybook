import styled from "styled-components";

export const InputTextWrapper = styled.div`
  /* Input Text Component*/
  margin-bottom: 20px;
  position: relative;
  .input-group {
    background-color: $white;
    .input-group-text {
      pointer-events: none;
      border: 0;
      cursor: auto;
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
      border-radius: 4px;
      outline: 0;
      box-shadow: none;
      background-color: #f8f9fa; //$gray-100;
      padding: 0.575rem 14px;
      width: 100%;
      height: 45px;
      &::placeholder {
        color: #adb5bd; //$gray-500;
      }
    }
  }
  .error-helper {
    position: absolute;
    top: 45px;
    background-color: $red;
    color: $white;
    padding: 0 2px;
    font-size: 0.675rem;
  }
`;
