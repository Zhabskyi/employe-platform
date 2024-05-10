import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMst } from "../../../../../models/Root";
import { observer } from "mobx-react-lite";

interface Props {
  open: boolean;
  handleClose: () => void;
  selectedEmployeeId: number;
}

const DeleteConfirmationModal = ({ open, handleClose, selectedEmployeeId }: Props) => {
  const {
    employees: { deleteEmployee, getEmployeeById }
  } = useMst();

  const employee = getEmployeeById(selectedEmployeeId);

  const handleDeleteEmployee = async () => {
    await deleteEmployee(selectedEmployeeId);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color="error">
        DELETE EMPLOYEE
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want to delete <strong>{`${employee?.firstName} ${employee?.lastName}`}</strong>? Employee from the
          list will be deleted permanently.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteEmployee} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default observer(DeleteConfirmationModal);
