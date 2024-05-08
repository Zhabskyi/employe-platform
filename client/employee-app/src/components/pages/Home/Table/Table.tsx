import { useState } from "react";
import "./Table.css";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from "@ag-grid-community/core";
import ActionButtons from "./CellRenderers";
import { GridOptions } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

const gridOptions: GridOptions = {
  components: {
    actionButtons: ActionButtons
  }
};

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Table = () => {
  const [rowData, setRowData] = useState([
    { firstName: "Lewis", lastName: "Burson", department: "Sales", salary: 3434, electric: true },
    { firstName: "Lewis", lastName: "Burson", department: "Sales", salary: 3434, electric: true },
    { firstName: "Lewis", lastName: "Burson", department: "Sales", salary: 3434, electric: true }
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "First Name",
      field: "firstName",
      flex: 2
    },
    {
      headerName: "Last Name",
      field: "lastName",
      flex: 1
    },
    { headerName: "Department", field: "department", flex: 1 },
    {
      headerName: "Salary",
      field: "salary",
      valueFormatter: (p) => "$" + Math.floor(p.value).toLocaleString(),
      flex: 1
    },
    { headerName: "Actions", field: "button", cellRenderer: ActionButtons, flex: 1 }
  ]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }} className="ag-theme-quartz">
        <AgGridReact
          rowModelType="clientSide"
          rowHeight={56}
          rowData={rowData}
          gridOptions={gridOptions}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default Table;
