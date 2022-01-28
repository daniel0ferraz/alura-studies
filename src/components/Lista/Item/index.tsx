import { Itarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

// type PropsItem = {
//   tarefa: string;
//   tempo: string;
// };

interface IProps extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: IProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
