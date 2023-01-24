import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.lightBgPrimary};
  color: ${(props) => props.theme.lightColor};
  min-height: 100vh;
`;

export default AppContainer;
