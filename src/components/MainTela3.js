import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

import DadosComprador from "./DadosComprador";
import LegendaAssentos from "./LegendaAssentos";
import FooterTela3 from "./FooterTela3";


function RenderizaAssentos({assentos}){
    return(
        assentos.map((assento, identificador) => {
            return(<RenderizaAssento numero={assento.name} disponivel={assento.isAvailable} key={identificador}/>);
        })
    );
}

function RenderizaAssento({numero, disponivel}){
    const  [assento, setAssento] = useState({selecionado: false, list: []});
     
    function tipoAssento(numero){
        if(!assento.selecionado){
            setAssento({selecionado: true, list: [...assento.list, numero]});
        }else{
            setAssento({selecionado: false, list: assento.list.filter(item => item !== numero)});
        }
    }
    return(
        <div className={assento.selecionado ? 'assento selecionado' : disponivel ? 'assento disponivel' : 'assento indisponivel'} onClick={() => disponivel ? tipoAssento(numero) : alert(`O assento ${numero} não está disponível!`)}>{numero}</div>
    );
}

export default function MainTela3(){
    const {idSessao} = useParams();
    
    const [dadosFilme, setDadosFilme] =  useState({day: {}, movie: {}, seats: []});
    
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const {data} = resposta;
            setDadosFilme(data);
        })
        promessa.catch(error => console.log(error.resposta));
    }, [idSessao]);
    
    return(
        <>
            <main>
                <section className="container-assentos">
                    <RenderizaAssentos assentos={dadosFilme.seats}/>
                </section>
                <LegendaAssentos />
                <DadosComprador />
                <button className="botao-reservar-assento"><Link to={`/sucesso`}>Reservar assento(s)</Link></button>
                <FooterTela3 posterFilme={dadosFilme.movie.posterURL} titulo={dadosFilme.movie.title} sessao={dadosFilme.day.weekday} horario={dadosFilme.name} />
            </main>  
        </>
    );
}