import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.lightBgSecundary};
  padding: 1.5rem 0;

  @media (min-width: 1400px) {
    div.header__container {
      max-width: 1400px;
    }
  }

  @media (min-width: 1200px) {
    div.header__container {
      flex-flow: row nowrap;
      justify-content: space-between;

      .header__search {
        max-width: 36.5rem;
        margin: unset;
      }
    }
  }

  .header__container {
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 1.4rem;

    .header__forms {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 2rem;
    }

    .header__logo {
      align-self: center;

      img {
        width: 160px;
      }
    }

    .header__search {
      position: relative;
      max-width: 90%;
      width: 100%;
      margin: 0 auto;

      input {
        width: 100%;
        background-color: ${(props) => props.theme.lightBgPrimary};
        color: ${(props) => props.theme.lightColor};
        border: 2px solid var(--grey-20);
        font-size: 1.6rem;
        padding: 2rem 11.7rem 2rem 1.5rem;
        border-radius: 8px;

        ::placeholder {
          color: var(--grey-20);
        }
      }

      button {
        font-weight: 500;
        position: absolute;
        top: calc(2.2rem / 2);
        right: 1rem;
      }
    }
  }
`;
