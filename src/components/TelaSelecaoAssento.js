import Header from "./Header";

export default function TelaSelecaoAssento(){
    return(
        <>
            <Header />
            <section className="titulo-page">Selecione o(s) assento(s)</section>
            <main>
                <section className="container-assentos">
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                    <div className="assento">01</div>
                </section>
                <section className="container-legendas-assentos">
                    <div className="legenda-assento">
                        <div className="assento-selecionado"></div>
                        <div className="legenda">Selecionado</div>
                    </div>
                    <div className="legenda-assento">
                        <div className="assento-disponivel"></div>
                        <div className="legenda">Disponível</div>
                    </div>
                    <div className="legenda-assento">
                        <div className="assento-indisponivel"></div>
                        <div className="legenda">Indisponível</div>
                    </div>
                </section>
                <section className="dados-comprador">
                    <div className="nome-comprador">
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome..."/>
                    </div>
                    <div className="cpf-comprador">
                        <p>CPF do comprador</p>
                        <input type="text" placeholder="Digite seu CPF..."/>
                    </div>
                </section>
                <button className="botao-reservar-assento">Reservar assento(s)</button>
            </main>
            <footer>
                <div className="footer-filme">
                    <img src="./assets/filme-2067.png" alt="filme 2067"/>
                </div>
                <div className="dados-filme">
                    <h1>2067</h1>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </>
    );
}