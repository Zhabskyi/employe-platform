import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./App.css";
import { PATHS } from "../../utilities/constants";
import TopWidgets from "../TopWidgets";

const App: React.FC = () => {
  return (
    <S.Main>
      <BrowserRouter>
        <>
          <TopWidgets />
        </>
      </BrowserRouter>
    </S.Main>
  );
};

export default App;
