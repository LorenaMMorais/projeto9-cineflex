export default function LegendaAssentos(){
    return(
        <section className="container-legendas-assentos">
            <div className="legenda-assento">
                <div className="assento-selecionado selecionado"></div>
                <div className="legenda">Selecionado</div>
            </div>
            <div className="legenda-assento">
                <div className="assento-disponivel disponivel"></div>
                <div className="legenda">Disponível</div>
            </div>
            <div className="legenda-assento">
                <div className="assento-indisponivel indisponivel"></div>
                <div className="legenda">Indisponível</div>
            </div>
        </section>
    );
}