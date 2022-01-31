import React from 'react';
import style from './Botao.module.scss';

type Props = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Botao({ type, onClick, children }: Props) {
  return (
    <button type={type} onClick={onClick} className={style.botao}>
      {children}
    </button>
  );
}
