import { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode
}

export default function Button({ type = "button", onClick, children, className = '' }: IButton) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <button
      type={type}
      className={classNames("bg-primary text-white rounded-[68px] px-5 py-3", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
