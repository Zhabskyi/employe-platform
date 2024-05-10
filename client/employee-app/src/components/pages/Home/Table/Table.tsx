import { useEffect, useState } from "react";
import "./Table.css";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from "@ag-grid-community/core";
import ActionButtons from "./CellRenderers";
import { GridOptions } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { useMst } from "../../../../models/Root";
import { observer } from "mobx-react-lite";
import { API_STATUS } from "../../../../api/apiStatus";
import { defaultColumnDefs } from "../../../../utilities/tableHelpers";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Grid, Typography } from "@mui/material";

const gridOptions: GridOptions = {
  components: {
    actionButtons: ActionButtons
  }
};

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Table = () => {
  const {
    employees: { employeeData, employeeStatus, getEmployees, employeeError, deleteEmployeeStatus, deleteEmployeeError }
  } = useMst();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | undefined>(undefined);

  const setupView = async () => {
    await getEmployees();
  };

  useEffect(() => {
    setupView();
  }, []);

  const openDeleteModal = (id: number) => {
    setSelectedEmployeeId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {deleteEmployeeStatus === API_STATUS.ERROR && (
        <Grid container width="100%">
          <Typography variant="h6" color="error">
            {deleteEmployeeError}
          </Typography>
        </Grid>
      )}
      {employeeStatus === API_STATUS.LOADING && <div>Loading...</div>}
      {employeeStatus === API_STATUS.ERROR && <div>{employeeError}</div>}
      {employeeStatus === API_STATUS.SUCCESS && (
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ width: "100%", height: "100%" }} className="ag-theme-quartz">
            <AgGridReact
              context={{ openDeleteModal }}
              rowModelType="clientSide"
              rowHeight={56}
              rowData={[...employeeData]}
              gridOptions={gridOptions}
              columnDefs={defaultColumnDefs}
            />
          </div>
        </div>
      )}
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        handleClose={closeDeleteModal}
        selectedEmployeeId={selectedEmployeeId}
      />
    </>
  );
};

export default observer(Table);
