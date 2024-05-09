import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

export const StyledButton: StyledComponent<any, any, any> = styled(Button)`
  padding: 5px;
  max-width: 50px;
  min-width: 50px;
`;
