import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./App.css";
import { PATHS } from "../../../utilities/constants";
import Home from "../../pages/Home";

const App: React.FC = () => {
  return (
    <S.Main>
      <BrowserRouter>
        <>
          <Routes>
            <Route path={PATHS.HOME}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </S.Main>
  );
};

export default App;
