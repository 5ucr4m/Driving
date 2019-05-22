import React from "react";

import { Container } from "./styles";

const Text = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Text;
