import { BrowserRouter } from "react-router-dom";
import * as S from "./App.css";
import TopWidgets from "../TopWidgets";
import Operations from "../Operations/Operations";

const App: React.FC = () => {
  return (
    <S.Main>
      <BrowserRouter>
        <TopWidgets />
        <Operations />
      </BrowserRouter>
    </S.Main>
  );
};

export default App;
