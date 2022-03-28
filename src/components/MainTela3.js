import Assento from "./Assento";
import DadosComprador from "./DadosComprador";
import LegendaAssentos from "./LegendaAssentos";

export default function MainTela3(){
    return(
        <>
            <main>
                <Assento />
                <LegendaAssentos />
                <DadosComprador />
                <button className="botao-reservar-assento">Reservar assento(s)</button>
            </main>  
        </>
    );
}