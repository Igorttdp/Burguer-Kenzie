import { DialogContent } from "@radix-ui/react-dialog";
import styled from "styled-components";

const StyledDialogContent = styled(DialogContent)`
  background-color: ${(props) => props.theme.lightBgPrimary};
  color: ${(props) => props.theme.lightColor};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 850px;
  min-height: 60vh;
  max-height: 70vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "hamburguer cart";

  @media (max-width: 780px) {
    display: flex;
    flex-flow: column nowrap;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #707070;
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  :focus {
    outline: none;
  }

  > div {
    :nth-child(1) {
      grid-area: hamburguer;
      padding-right: 2rem;

      @media (max-width: 780px) {
        padding: unset;
      }

      > div {
        text-align: center;
        height: 250px;

        @media (max-width: 780px) {
          height: 200px;
        }

        img {
          width: 250px;
          @media (max-width: 780px) {
            width: 200px;
          }
        }
      }

      > div + hr {
        margin-bottom: 2rem;

        + div {
          height: unset;
          text-align: left;
          display: flex;
          flex-flow: column nowrap;
          gap: 13rem;

          @media (max-width: 780px) {
            flex-flow: row nowrap;
            justify-content: space-between;
            margin-bottom: 2rem;
            gap: unset;
          }

          div {
            :nth-child(1) {
              display: flex;
              flex-flow: column nowrap;
              gap: 1rem;

              h2 {
                font-size: clamp(1.6rem, 3vw, 2.5rem);
              }
              span {
                font-size: 1.4rem;
              }
            }

            :nth-child(2) {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              justify-content: space-between;
              gap: 2rem;

              @media (max-width: 375px) {
                flex-flow: column nowrap;
              }

              table ~ button {
                max-width: 65%;
                width: 100%;

                @media (max-width: 375px) {
                  max-width: unset;
                }
              }
            }
          }
        }
      }
      table {
        all: unset;
        position: unset;
      }
    }

    :nth-child(2) {
      grid-area: cart;
      max-width: 100%;

      .body {
        height: 85%;
        border-radius: 0 0px 8px 8px;
      }
    }
  }
`;

export default StyledDialogContent;
