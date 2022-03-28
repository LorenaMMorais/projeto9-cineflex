import Header from "./Header";
import FooterTela2 from "./FooterTela2";
import MainTela2 from "./MainTela2";

export default function TelaSelecaoHorario(){
    return (
        <>
            <Header />
            <section className="titulo-page">Selecione o Horário</section>
            <MainTela2 />
            <FooterTela2 />
        </>
    );
}