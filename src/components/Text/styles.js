import { css } from "styled-components";
import styled from "styled-components/native";
import { colors, sizes } from "../../constants/theme";

export const Container = styled.Text`
  ${props => props.h1 && sizes.h1};
  ${props => props.h2 && sizes.h2};
  ${props => props.h3 && sizes.h3};
  ${props => props.title && sizes.title};
  ${props => props.header && sizes.header};
  ${props => props.body && sizes.body};
  ${props => props.caption && sizes.caption};
  ${props => props.small && sizes.small};

  ${props =>
    !!props.color &&
    !!colors[props.color] &&
    css`
      color: ${colors[props.color]};
    `}

  ${props =>
    !!props.spacing &&
    css`
      letter-spacing: ${props.spacing}px;
    `}

    ${props =>
      !!props.size &&
      css`
        font-size: ${props.size}px;
      `}

    ${props =>
      !!props.medium &&
      css`
        font-weight: 500;
      `}

  ${props =>
    !!props.transform &&
    props.transform === "uppercase" &&
    css`
      text-transform: uppercase;
      font-weight: 500;
    `}
    
`;
