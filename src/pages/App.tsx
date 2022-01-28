import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selected, setSelected] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelected(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selected: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selected={selected} />
    </div>
  );
}

export default App;
