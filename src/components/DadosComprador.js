export default function DadosComprador(){
    return(
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
    );
}