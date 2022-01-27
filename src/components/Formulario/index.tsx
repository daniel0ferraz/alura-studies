/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Itarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

type SetTarefas = {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
};

export default function Formulario({ setTarefas }: SetTarefas) {
  const [tempo, setTempo] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [reset, setReset] = useState({});

  const addTarefa = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    console.log('event', { tarefa, tempo }, reset);
    setReset({ tarefa: '', tempo: '' });
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          max="12:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
