import Header from "./Header";

export default function TelaSucesso(){
    return(
        <>
            <Header />
            <section className="titulo-page sucesso">Pedido feito com sucesso!</section>
            {/* ajeitar layout titulo-page depois */}
            <main>
                <section className="finalizacao-compra">
                    <div className="descricao-compra">
                        <div className="descricao">
                            <h1>Filme e sessão</h1>
                            <p>2067</p>
                            <p>14/06/2021 15:00</p>
                        </div>
                        <div className="descricao">
                            <h1>Ingressos</h1>
                            <p>Assento 15</p>
                            <p>Assento 16</p>
                        </div>
                        <div className="descricao">
                            <h1>Comprador</h1>
                            <p>Nome: João da Silva Sauro</p>
                            <p>CPF: 123.456.789-10</p>
                        </div>
                    </div>
                </section>    
                <button className="voltar-home">Voltar pra Home</button>
            </main>
        </>
    );
}