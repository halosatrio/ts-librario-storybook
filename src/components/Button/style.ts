import styled from "styled-components";

export const ButtonWrapper = styled.button`
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

  /* dafult color: gray (bootstrap-secondary) */
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;

  &.btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  &.btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  &.btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    font-size: 20px;
  }
  &.btn-sm {
    border-radius: 0.2rem;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  &.btn-block {
    display: block;
  }
  &.btn-shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  &:disabled {
    /* cursor: not-allowed; */
    pointer-events: none;
    opacity: 0.65;
  }
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
