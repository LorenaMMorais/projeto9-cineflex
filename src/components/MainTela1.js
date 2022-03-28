import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function MainTela1(){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promessa.then((resposta) =>{
            const {data} = resposta;
            setFilmes(data);
    });
        promessa.catch(error => console.log(error.resposta));
    }, []);

    return(
        <main>
            <section className="container-filmes">
                {
                    filmes.map(filme =>{return <Link to={`/sessoes/${filme.id}`}><img className="filme" key={filme.id} src={filme.porterURL} alt={filme.title}/></Link>})
                }
            </section>
        </main>
    );
}