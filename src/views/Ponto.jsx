import React from "react";
import './Ponto.css'

export default function Ponto(){
    return(
        <div className="Pontoview">
            <h1>Marcação de Ponto</h1>
            <div className="Ponto">
                <input type="number" id="identificacao" placeholder="Digite a identificação"/>
                <button className="btn" onClick={Registro}>Marcar</button>
            </div>
        </div>
    )
}

async function Registro(){
    const data = new Date;
    const id = document.getElementById('identificacao').value
    const hora = data.getHours();
    const min = data.getMinutes();
    const dia = data.getDate();
    const mes = data.getMonth()+1;
    const ano = data.getFullYear();

    const formatDay = dia+'/'+mes+'/'+ano;
    const formatHour = hora+':'+min;
    let reg = {
        "data":formatDay,
        "hora":formatHour,         
        "id":id
    }
    const dataJson = JSON.stringify(reg);
    const req = await fetch("http://localhost:3004/registros/",{
        method: "POST",
        headers: {"content-type":"application/json"},
        body: dataJson
    });

    /* console.log("usuario ",id," registro em ",hora," horas e ",min,
    " minutos do dia ",dia," do mes ",mes," de ",ano, data); */
    console.log(id, data);
}

let registros = [
    {'id':'','horario':'','data':''}
]