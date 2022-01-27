import style from '../Lista.module.scss';

type PropsItem = {
  tarefa: string;
  tempo: string;
};

export default function Item({ tarefa, tempo }: PropsItem) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
