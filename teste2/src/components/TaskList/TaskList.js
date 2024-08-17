import React, { useState } from "react";
import "./taskList.css";

export default function TaskList() {

    const [nome, setNome] = useState('');
    const [status, setStatus] = useState('Não concluída');

    const [tarefas, setTarefas] = useState([]);

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('todas');

    function alteraOpcao(e){
        setOpcaoSelecionada(e.target.value);
    }

    function adicionaTarefa(e) {
        e.preventDefault();

        const novaTarefa = {
            nome: nome,
            status: status
        };

        setTarefas([...tarefas, novaTarefa]);

        setNome("");
    }

    function alteraStatus(index) {
        const copiaTarefas = [...tarefas];

        const statusAlterado = copiaTarefas[index].status === "Não concluída" ? "Concluída" : "Não concluída";

        copiaTarefas[index] = {
            ...copiaTarefas[index],
            status: statusAlterado
        };

        setTarefas(copiaTarefas);
    }

    function retornaTarefas(listaTarefas) {
        if (opcaoSelecionada === "concluidas") {
            return listaTarefas.filter(obj => obj.status === "Concluída");
        }

        if (opcaoSelecionada === "naoConcluidas") {
            return listaTarefas.filter(obj => obj.status === "Não concluída");
        }
        return listaTarefas;
    }

    return (
        <div className="container">
            <div className="campoAdicionaTarefa">
                <form className="form" onSubmit={adicionaTarefa}>
                    <span className="titulo">Adicione uma tarefa</span>
                    <textarea className="textArea" name="nome" type="text" value={nome} onChange={e => setNome(e.target.value)}
                        placeholder="Digite aqui..." autoFocus />
                    <button className="btnAdicionar" name="adicionar" type="submit">Adicionar Tarefa</button>
                </form>
            </div>

            <div className="campoListagemTarefas">
                <div className="botoesRadio">
                    <label className="label">
                        <input
                            type="radio"
                            value="todas"
                            checked={opcaoSelecionada === 'todas'}
                            onChange={alteraOpcao}
                            className="label"
                        />
                        Todas Tarefas
                    </label>
                    <label className="label">
                        <input
                            type="radio"
                            value="concluidas"
                            checked={opcaoSelecionada === 'concluidas'}
                            onChange={alteraOpcao}
                            className="label"
                        />
                        Concluídas
                    </label>
                    <label className="label">
                        <input
                            type="radio"
                            value="naoConcluidas"
                            checked={opcaoSelecionada === 'naoConcluidas'}
                            onChange={alteraOpcao}
                            className="label"
                        />
                        Não Concluídas
                    </label>
                </div>
                <div className="scroll">
                    {retornaTarefas(tarefas).length > 0 ? retornaTarefas(tarefas).map((item, index) => (
                        <div key={index}>
                            <div className="tarefa">
                                <p>{item.nome}</p>
                            </div>
                            <div className="campoStatus">
                                {item.status === "Não concluída" ?
                                    <>
                                        <span className="nomeStatus">Status: <span className="status1">{item.status}</span></span>
                                        <button className="btnStatus1" onClick={() => alteraStatus(index)}>Concluir</button>
                                    </>
                                    :
                                    <>
                                        <span className="nomeStatus">Status: <span className="status2">{item.status}</span></span>
                                        <button className="btnStatus2" onClick={() => alteraStatus(index)}>Não concluir</button>
                                    </>
                                }
                            </div>
                        </div>
                    ))
                        : <span className="semRegistros">Não há tarefas registradas</span>}
                </div>
            </div>
        </div>
    )
}