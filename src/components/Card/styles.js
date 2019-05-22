import styled from "styled-components/native";
import { theme } from "../../constants";

export const Container = styled.View`
  border-radius: ${theme.sizes.border}px;
  padding: ${theme.sizes.base + 4}px;
  margin-bottom: ${theme.sizes.base}px;
  background-color: ${props => (!!props.color ? props.color : "white")};

  ${props => props.shadow && theme.sizes.shadow}
`;
