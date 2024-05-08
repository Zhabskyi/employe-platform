import { Button } from "@mui/material";

interface Props {
  actionText: string;
  onClick: () => void;
}

const ActionButton: React.FC = ({ actionText, onClick }: Props) => {
  return <Button onClick={onClick}>{actionText}</Button>;
};

export default ActionButton;
