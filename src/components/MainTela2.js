import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import FooterTela2 from "./FooterTela2";

export default function MainTela2(){
    const {idFilme} = useParams();
    const [sessoes, setSessoes] = useState({
        days:[]
    });
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promessa.then(resposta => {
            const {data} = resposta;
            setSessoes(data);
        });
        promessa.catch(error => console.log(error.resposta));
    },[idFilme]);
    return(
        <>
            <main className="container-opcoes-dias">
                {
                    sessoes.days.map(sessao => {
                        return(
                            <div className="dia">
                                {sessao.weekday} - {sessao.date}
                                <div className="container-horarios">
                                    {
                                        sessao.showtimes.map((horarioSessao, identificador) =>{
                                            return(
                                                <button key={identificador} className="horario"><Link to={`/assentos/${horarioSessao.id}`}>{horarioSessao.name}</Link></button>
                                            )
                                        })
                                    }
                                </div> 
                            </div>
                        );
                    })
                        
                }
            </main>
            <FooterTela2 posterFilme={sessoes.posterURL} titulo={sessoes.title}/>
        </>
    );
}