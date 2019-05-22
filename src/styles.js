import { Dimensions } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import { theme } from "./constants";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

export const Block = styled.View`
  flex: ${props => (!!props.flex ? props.flex : 1)};
  flex-direction: ${props => (!!props.row ? "row" : "column")};

  ${props =>
    !!props.center &&
    css`
      align-items: center;
    `}

  ${props =>
    !!props.middle &&
    css`
      justify-content: center;
    `}
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  background-color: ${theme.colors.gray3};
  ${props =>
    props.vLine &&
    css`
      margin: ${theme.sizes.base / 2}px;
      width: 1px;
    `};

  ${props =>
    props.hLine &&
    css`
      margin: ${theme.sizes.base * 2}px;
      height: 1px;
    `};
`;

export const Badge = styled.View`
  position: absolute;
  top: -4px;
  right: -4px;
  width: ${props => (!!props.size ? props.size : 13)}px;
  height: ${props => (!!props.size ? props.size : 13)}px;
  background-color: ${props =>
    !!theme.colors[props.color] ? theme.colors[props.color] : "#999"};
  border-radius: ${props => (!!props.radius ? props.radius : 8)}px;
`;

export const Menu = styled.Image`
  width: 20px;
  height: 24px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: "contain"
})`
  position: absolute;
  top: ${props => (!!props.top ? props.top : theme.sizes.base)};
  right: ${props => (!!props.right ? props.right : theme.sizes.base)};
  width: ${props => (!!props.size ? props.size : 16)}px;
  height: ${props => (!!props.size ? props.size : 16)}px;
`;

export const CardGradient = styled(LinearGradient)`
  border-radius: ${theme.sizes.border}px;
  padding: ${theme.sizes.base + 4}px;
  margin-bottom: ${theme.sizes.base}px;
  background-color: ${props => (!!props.color ? props.color : "white")};

  box-shadow: 0px 2px 13px rgba(100, 100, 100, 0.13);
`;

export const BadgeIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => (!!props.size ? props.size : 13)}px;
  height: ${props => (!!props.size ? props.size : 13)}px;
  background-color: ${props =>
    !!theme.colors[props.color]
      ? theme.colors[props.color]
      : props.color || "#999"};
  border-radius: ${props => (!!props.radius ? props.radius : 8)}px;

  ${props =>
    !!props.button &&
    css`
      position: absolute;
      bottom: 0;
      left: ${(width - 144) / 2};
    `}
`;
