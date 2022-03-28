export default function FooterTela3(props){
    return(
        <footer>
            <div className="footer-filme">
                <img src={props.posterFilme} alt={props.titulo}/>
            </div>
            <div className="dados-filme">
                <h1>{props.titulo}</h1>
                <p>{props.sessao} - {props.horario}</p>
            </div>
        </footer>
    );
}