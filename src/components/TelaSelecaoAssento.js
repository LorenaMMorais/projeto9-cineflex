import Header from "./Header";
import FooterTela3 from "./FooterTela3";
import MainTela3 from "./MainTela3";

export default function TelaSelecaoAssento(){
    return(
        <>
            <Header />
            <section className="titulo-page">Selecione o(s) assento(s)</section>
            <MainTela3 />
            <FooterTela3 />
        </>
    );
}