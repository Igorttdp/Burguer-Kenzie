import styled from "styled-components";

export const SearchResults = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0;

  h3 {
    font-size: 2rem;

    span {
      color: var(--grey-50);
    }
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;
