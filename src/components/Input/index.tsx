import { useState, ChangeEvent } from 'react'
import classNames from 'classnames';

import * as Styles from './Input.styles';

interface IInput {
  type?: string;
  name: string;
  id?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function Input({ type = 'text', className = '', name, id, onChange, placeholder = '' }: IInput) {
  const [val, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.toString())
    if (onChange) {
      onChange(event.target.value.toString())
    }
  }
  return (
    <Styles.MainWrapper
      type={type}
      name={name}
      id={id}
      className={classNames("outline-none bg-transparent rounded-[38px] py-3 px-4 text-primary font-primary border border-transparent focus:border-neutral-bi-50", className)}
      onChange={handleChange}
      value={val}
      placeholder={placeholder}
    />
  )
}
