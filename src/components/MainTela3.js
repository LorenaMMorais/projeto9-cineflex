import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

// import Assento from "./Assento";
import DadosComprador from "./DadosComprador";
import LegendaAssentos from "./LegendaAssentos";
import FooterTela3 from "./FooterTela3";

export default function MainTela3(){
    const {idSessao} = useParams();
    const [assentos, setAssentos] =  useState({day: {}, movie: {}, seats: []});
    // const [infoReserva, setInfoReserva] = useState({dia: {}, filme: {}, assento: []});
    
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const {data} = resposta;
            setAssentos(data);
        })
        promessa.catch(error => console.log(error.resposta));
    }, [idSessao]);
    
    return(
        <>
            <main>
                <section className="container-assentos">
                    {
                        assentos.seats.map((assento, identificador) => {
                            return(
                                    <div key={assento.id} className="assento">{assento.name}</div>
                            );
                        })
                    }
                </section>
                <LegendaAssentos />
                <DadosComprador />
                <button className="botao-reservar-assento"><Link to={`/sucesso`}>Reservar assento(s)</Link></button>
                <FooterTela3 posterFilme={assentos.movie.posterURL} titulo={assentos.movie.title} sessao={assentos.day.weekday} horario={assentos.name} />
            </main>  
        </>
    );
}