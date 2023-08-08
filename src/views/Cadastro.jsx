import React from "react";
import './Cadastro.css'

export default () => {
    return (
        <div className="container">
                <h1>Cadastro de Funcionários</h1>
            <div>
                <div>
                    <p><span>Nome Completo e CPF</span></p>
                    <input type="text" name="nome" id="nome" placeholder="" className="input" v-model="nome"/>
                    <input type="text" name="cpf" id="cpf" placeholder="Digite o CPF" className="input"
                     v-model="cpf" autoComplete="off" maxLength={14} 
                     onKeyUp={handleMaskCPF} required/>
                </div>
                <div>
                    <p><span>Cargo e Setor</span></p>
                    <input type="text" name="cargo" id="cargo" placeholder="Digite o Cargo" className="input" v-model="cargo"/>
                    <input type="text" name="setor" id='setor' placeholder="Digite o Setor" className="input" v-model="setor"/>
                </div>
                <div className="horarios">
                    <p><span>Horários</span></p>
                    <span>Entrada</span>
                    <input type="time" name="entrada" id="entrada" placeholder="Digite o Entrada"
                     className="input" v-model="entrada"/>
                    <span>Saida Almoço</span>
                    <input type="time" name="intervalo1" id="intervalo1" placeholder="Digite a saída - almoço"
                     className="input" v-model="intervalo1"/>
                    <span>Volta Almoço</span>
                    <input type="time" name="intervalo2" id="intervalo2" placeholder="Digite o retorno - almoço"
                     className="input" v-model="intervalo2"/>
                    <span>Saida</span>
                    <input type="time" name="saida" id="saida" placeholder="Digite a Saída"
                     className="input" v-model="saida"/>
                </div>
                <div className="btn">
                    <button name="btn" id="cadastrar" onClick={Cadastrar}>Cadastrar</button>
                    <button name="btn" id="reset" onClick={Limpar}>Limpar</button>
                </div>
            </div>
        </div>
    )
}

function handleMaskCPF(event) {
    const x = event.target.value
        .replace(/\D+/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    event.target.value =
        `${x[1]}` + (x[2] ? `.${x[2]}` : ``) + (x[3] ? `.${x[3]}` : ``) + (x[4] ? `-${x[4]}` : ``);
}
async function Cadastrar(){
    let x = {
        'nome':document.getElementById('nome').value,
        'cpf':document.getElementById('cpf').value,
        'cargo':document.getElementById('cargo').value,
        'setor':document.getElementById('setor').value,
        'entrada':document.getElementById('entrada').value,
        'intervalo1':document.getElementById('intervalo1').value,
        'intervalo2':document.getElementById('intervalo2').value,
        'saida':document.getElementById('saida').value
        }
    //funcionarios.push(x)
    const dataJson = JSON.stringify(x);
    const req = await fetch("http://localhost:3004/funcionarios/",{
        method: "POST",
        headers: {"content-type":"application/json"},
        body: dataJson
    });
    //console.log(funcionarios)
}

function Limpar(){
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

/*let funcionarios = [
    {"id": 1, "nome": "Leandro Amaro", "cpf": "123.456.789-00", "cargo":"ADM",
    "setor":"DP", "entrada":"08:30", "intervalo1":"13:00", "intervalo2":"14:00", "saida":"18:00"}
]
*/