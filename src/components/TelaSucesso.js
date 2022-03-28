import Header from "./Header";
import MainTela4 from "./MainTela4";

export default function TelaSucesso(){
    return(
        <>
            <Header />
            <section className="titulo-page sucesso">Pedido feito com sucesso!</section>
            {/* ajeitar layout titulo-page depois */}
            <MainTela4 />
        </>
    );
}