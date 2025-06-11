import React from 'react';

import { useFormContext } from 'react-hook-form';
import { InputFieldAttributes } from '../../models/FieldAttributes';
import { InputText } from './FormElements';

const InputField: React.FC<InputFieldAttributes> = ({ label, name, type }) => {
  const { register, formState } = useFormContext();

  const error = formState.errors[name];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={name}>{label}</label>
      <InputText {...register(name)} id={name} type={type} />
      {error && <p style={{ color: 'red' }}>{error.message?.toString()}</p>}
    </div>
  );
};

export default InputField;
