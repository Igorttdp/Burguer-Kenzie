import styled from "styled-components";

const AmountControllerContainer = styled.table`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 82.69px;

  @media (max-width: 400px) {
    bottom: 8px;
  }

  tr {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    td {
      button {
        all: unset;
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;

        :disabled {
          background-color: #ffa0a0;
          cursor: not-allowed;
        }
      }

      :nth-child(1) {
        button {
          border: 1px solid var(--negative);
        }

        :hover {
          color: #fff;
          background-color: var(--negative);
        }
      }

      :last-child {
        button {
          border: 1px solid var(--color-primary);

          :hover {
            color: #fff;
            background-color: var(--color-primary);
          }
        }
      }
    }
  }
`;

export default AmountControllerContainer;
