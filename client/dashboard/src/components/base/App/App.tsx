import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./App.css";
import { PATHS } from "../../../utilities/constants";

const App: React.FC = () => {
  return (
    <S.Main>
      <BrowserRouter>
        <>
          <Routes>
            <Route path={PATHS.HOME}>
              <Route index element={<div>Home Page</div>} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </S.Main>
  );
};

export default App;
