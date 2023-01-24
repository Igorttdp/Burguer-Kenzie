import styled from "styled-components";

export const MainDiv = styled.div`
  min-height: 110vh;
  max-width: 90%;
  width: 100%;
  margin: 2rem auto 0;
  padding-bottom: 4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  align-items: center;
  gap: 3rem;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }

  @media (min-width: 1200px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    min-height: fit-content;
  }
`;
