import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { Itarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

type Props = {
  selected: Itarefa | undefined;
  finalizarTarefa: () => void;
};

export default function Cronometro({ selected, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) {
      setTempo(tempoParaSegundos(selected.tempo));
    }
  }, [selected]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>
          Escolha um card e inicie o cronômetro Tempo:
        </p>

        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo} />
        </div>

        <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
      </div>
    </>
  );
}
