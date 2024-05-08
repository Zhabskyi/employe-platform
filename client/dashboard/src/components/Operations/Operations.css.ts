import { Grid, styled } from "@mui/material";
import { StyledComponent } from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container: StyledComponent<any, any, any> = styled(Grid)`
  border-top: 1px solid #e8e8e8;
  padding-bottom: 24px;
  padding-top: 24px;
  margin: 24px 0px 0px 60px;
`;

export const StyledLink: StyledComponent<any, any, any> = styled(Link)`
  height: 240px;
  width: 240px;
  margin-top: 48px;
  text-decoration: none;
  text-align: center;
  background-color: #f5f5f5;
  border: 3px solid #e8e8e8;
`;
