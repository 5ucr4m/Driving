import styled from "styled-components/native";
import { theme } from "../../constants";

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${theme.sizes.padding}px;
  background-color: ${theme.colors.gray4};
`;
