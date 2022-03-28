import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import TelaSelecaoFilme from "./TelaSelecaoFilme";
import TelaSelecaoHorario from "./TelaSelecaoHorario";
import TelaSelecaoAssento from "./TelaSelecaoAssento";
import TelaSucesso from "./TelaSucesso";
export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<TelaSelecaoFilme />} />
                <Route path="/sessoes/:idFilme" element={<TelaSelecaoHorario />} />
                <Route path="/assentos/:idSessao" element={<TelaSelecaoAssento />} />
                <Route path="/sucesso" element={<TelaSucesso />} />
            </Routes>
      </BrowserRouter>
    );
}