import styled from "styled-components";

export const ProductCard = styled.ul`
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #707070;
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    height: 5px;
    background-color: transparent;
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    /* justify-content: center; */
    overflow: auto;

    li {
      max-width: 300px;
    }
  }

  li {
    cursor: pointer;
    max-width: 300px;
    min-width: 300px;
    height: 350px;
    width: 100%;
    border: 2px solid var(--grey-20);
    transition: all 0.2s;

    :hover {
      border-color: var(--color-primary);
      scale: 0.98;

      button {
        scale: 1.02;
      }
    }
  }

  .productImg {
    max-height: 150px;

    img {
      height: 150px;
      object-fit: contain;
      background-color: ${(props) => props.theme.lightBgSecundary};
    }
  }

  .productInfo {
    height: 200px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;

    h2 {
      font-size: 1.8rem;
    }

    span {
      color: var(--grey-50);
      font-size: 1.2rem;

      strong {
        color: var(--color-primary);
        font-size: 1.4rem;
      }
    }
  }
`;
