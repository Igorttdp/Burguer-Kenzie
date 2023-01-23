import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 36.5rem;
  }

  .empty {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      color: var(--grey-50);
      font-size: 1.4rem;
    }
  }

  .header {
    height: 6.5rem;
    color: #fff;
    background-color: var(--color-primary);
    border-radius: 5px 5px 0 0;
    padding: 2.2rem 2rem;

    h2 {
      font-size: 1.8rem;
    }
  }

  .body {
    min-height: 15rem;
    max-height: 465px;
    background-color: var(--grey-0);
    padding: 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    ul {
      height: 300px;
      display: flex;
      flex-flow: column nowrap;
      gap: 2.5rem;
      overflow-y: scroll;

      li {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        gap: 1.5rem;
        position: relative;

        > span {
          position: absolute;
          right: 0;
          bottom: 0;
        }

        img {
          background-color: var(--grey-0);
          max-width: 70px;
          height: 70px;
          object-fit: contain;
        }

        div {
          display: flex;
          flex-flow: column nowrap;
          gap: 1rem;

          h2 {
            max-width: 100px;
          }
        }

        button {
          border: 2px solid var(--negative);
          background-color: transparent;
          padding: 1rem 1.5rem;
          color: var(--negative);
          font-size: 1.2rem;
          font-weight: 500;
          position: absolute;
          top: 0;
          right: 0;

          :hover {
            background-color: var(--negative);
            color: #fff;
          }
        }
      }
    }

    hr {
      margin-top: 2.1rem;
      margin-bottom: 1.4rem;
      width: 100%;
      size: 2rem;
      color: var(--grey-20);
    }

    .total {
      margin-bottom: 2.2rem;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      span {
        color: var(--grey-50);
        font-size: 1.4rem;

        strong {
          color: var(--grey-100);
          font-weight: 700;
        }
      }
    }

    .removeAll {
      width: 100%;
      color: var(--grey-50);
      background-color: var(--grey-20);
      border-radius: 8px;

      :hover {
        background-color: var(--negative);
        color: #fff;
      }
    }
  }
`;
