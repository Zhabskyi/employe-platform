import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./App.css";
import { PATHS } from "../../../utilities/constants";
import Home from "../../pages/Home";
import EmployeeForm from "../../pages/EmployeeForm";

const App: React.FC = () => {
  return (
    <S.Main>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME}>
            <Route index element={<Home />} />
            <Route path={PATHS.EMPLOYEE_FORM}>
              <Route path={PATHS.ACTION} element={<EmployeeForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </S.Main>
  );
};

export default App;
