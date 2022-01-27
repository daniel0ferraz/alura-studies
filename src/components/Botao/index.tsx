import React from 'react';
import style from './Botao.module.scss';

type Props = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Botao({ children }: Props) {
  return <button className={style.botao}>{children}</button>;
}
