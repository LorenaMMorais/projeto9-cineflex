import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';

// import DadosComprador from "./DadosComprador";
import LegendaAssentos from "./LegendaAssentos";
import FooterTela3 from "./FooterTela3";


function RenderizaAssentos({assentos, setIds}){
    return(
        assentos.map((assento, identificador) => {
            return(<RenderizaAssento numero={assento.name} disponivel={assento.isAvailable} key={identificador} setIds={setIds}/>);
        })
    );
}

function RenderizaAssento({numero, disponivel, setIds}){
    const  [assento, setAssento] = useState({selecionado: false, list: []});
     
    function tipoAssento(numero){
        if(!assento.selecionado){
            setAssento({selecionado: true, list: [...assento.list, numero]});
        }else{
            setAssento({selecionado: false, list: assento.list.filter(item => item !== numero)});
        }
        setIds(assento.list);
    }
    return(
        <div className={assento.selecionado ? 'assento selecionado' : disponivel ? 'assento disponivel' : 'assento indisponivel'} onClick={() => disponivel ? tipoAssento(numero) : alert(`Esse assento não está disponível!`)}>{numero}</div>
    );
}


export default function MainTela3(){
    const {idSessao} = useParams();
    const navigate = useNavigate();
    const [nomeComprador, setNomeComprador] = useState('');
    const [cpfComprador, setCpfComprador] = useState('');
    const [ids, setIds] = useState([]);
    const [dadosAssento, setDadosAssento] =  useState({day: {}, movie: {}, seats: []});
    
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const {data} = resposta;
            setDadosAssento(data);
        })
        promessa.catch(error => console.log(error.response));
    }, [idSessao]);
    
    function postDadosComprador(e){
        e.preventDefault();
        if(ids.length == 0){
            alert('É necessário escolher ao menos um assento!');
        } else{
            const promessa = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, {ids: ids, nome: nomeComprador, cpf: cpfComprador});
        
        promessa.then(resposta => {
            navigate('/sucesso');
        })
        promessa.catch((error) => console.log(error.response));
    }
}

    return(
        <>
            <main>
                <section className="container-assentos">
                    <RenderizaAssentos assentos={dadosAssento.seats} setIds={setIds}/>
                </section>
                <LegendaAssentos />
                {/* <DadosComprador /> */}
                <section className="dados-comprador">
                    <div className="nome-comprador">
                        <p>Nome do comprador:</p>
                        <input type="text" placeholder="Digite seu nome..." value={nomeComprador} required onChange={(e) => setNomeComprador({setNomeComprador: e.target.value})}/>
                    </div>
                    <div className="cpf-comprador">
                        <p>CPF do comprador</p>
                        <input type="text" placeholder="Digite seu CPF..." value={cpfComprador}required onChange={(e) => setCpfComprador({setCpfCompraddor: e.target.value})}/>
                    </div>
                </section>
                <button className="botao-reservar-assento"><Link to={`/sucesso`}>Reservar assento(s)</Link></button>
                <FooterTela3 posterFilme={dadosAssento.movie.posterURL} titulo={dadosAssento.movie.title} sessao={dadosAssento.day.weekday} horario={dadosAssento.name} />
            </main>  
        </>
    );
}