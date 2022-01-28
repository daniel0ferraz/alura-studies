import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { Itarefa } from '../../types/tarefa';
import { useState } from 'react';

type Props = {
  selected: Itarefa | undefined;
};

export default function Cronometro({ selected }: Props) {
  const [tempo, setTempo] = useState<number>();

  if (selected?.tempo) {
    setTempo(tempoParaSegundos(selected.tempo));
  }

  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>
          Escolha um card e inicie o cronômetro Tempo: {tempo}
        </p>

        <div className={style.relogioWrapper}>
          <Relogio />
        </div>

        <Botao>Começar</Botao>
      </div>
    </>
  );
}
