export default function FooterTela2(props){
    return(
            <footer>
                <div className="footer-filme">
                    <img src={props.posterFilme} alt={props.titulo}/>
                </div>
                <h1>{props.titulo}</h1>
            </footer>
    );
}