import { minWidth, width } from "@mui/system";
import ActionButtons from "../components/pages/Home/Table/CellRenderers";

export const defaultColumnDefs = [
  {
    headerName: "First Name",
    field: "firstName",
    flex: 1
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
  { headerName: "Actions", field: "button", width: 150, minWidth: 150, cellRenderer: ActionButtons, flex: 1 }
];
