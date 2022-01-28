import styled from "styled-components";

export const JumbotronWrapper = styled.section`
  .img-hero {
    img {
      height: 450px;
      width: 100%;
      background-position: center;
      background-size: cover;
      border-radius: 20px;
    }
  }

  .jumbotron {
    background: url(../../assets/images/hero1.jpg);
    background-size: cover;
    background-position: center;
    height: 540px;
    position: relative;
    // z-index: -1;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba($color: $cyan, $alpha: 0.7);
      bottom: 0;
    }

    .container {
      color: $light;
      text-align: center;
      position: relative;
      z-index: 1;

      .lead {
        font-size: 15px;
      }

      .button {
        z-index: 3;
      }

      p.icon {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
